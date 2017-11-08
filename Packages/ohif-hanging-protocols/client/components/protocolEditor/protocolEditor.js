import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Random } from 'meteor/random';
import { $ } from 'meteor/jquery';

import { OHIF } from 'meteor/ohif:core';
import { Viewerbase } from 'meteor/ohif:viewerbase';


Template.protocolEditor.onCreated(function(){
  var config = cornerstoneTools.regionsThreshold.getConfiguration()
  this.state = new ReactiveDict();
  this.state.setDefault({
    scores: config.regionColorsRGB.slice(1).map(
      () => (0)
    ),
  })
})

Template.protocolEditor.helpers({
    config() {
      return cornerstoneTools.regionsThreshold.getConfiguration()
    },
    colors() {
      const instance = Template.instance();
      const lastScores = instance.state.get('scores');
      const config = cornerstoneTools.regionsThreshold.getConfiguration();
      const colors = config.regionColorsRGB.map((color, i) => ({
          'checked': config.toolRegionValue == i+1,
          'color': color,
          'derp': true,
          'i': i+1,
          'score': i === 0 ? 0 : lastScores[i-1].toFixed(1),
        }));
      return colors;
    },
    KPV() {
      const instance = Template.instance();
      return instance.state.get('KPV');
    },
    Location() {
      const instance = Template.instance();
      return instance.state.get('Location');
    },
    ScanDate() {
      const instance = Template.instance();
      return instance.state.get('ScanDate');
    },
    ScanPatientName() {
      const instance = Template.instance();
      return instance.state.get('ScanPatientName');
    }
});

Template.protocolEditor.onRendered(function () {
  // Get study metadata and add to state for display.

  let intervalCount =  0;
  const intervalId = setInterval(() => {
    let instance;

    OHIF.viewer.StudyMetadataList.find(studyMetadata => {
        // Search for the instance that has the current imageId
        instance = studyMetadata.findInstance(instance => {
            return true; //instance.getImageId() === imageId;
        });

        // If instance if found stop the search
        return Boolean(instance);
    });

    const data = instance._data;

    this.state.set('ScanPatientName', data.scanPatientName)
    this.state.set('ScanDate', data.scanDate)
    this.state.set('Location', data.scanLocation)
    this.state.set('KPV', data.KPV)

    if (intervalCount >= 1) clearInterval(intervalId);
    intervalCount++;
  },1000)
})

Template.protocolEditor.events({
  'change #layersAbove':function(event, context) {
    const config = cornerstoneTools.regionsThreshold.getConfiguration();
    config.layersAbove = parseInt(event.target.value);
    cornerstoneTools.regionsThreshold.setConfiguration(config)
  },
  'change #layersBelow':function(event, context) {
    console.log("HEEEEEEJ");
    const config = cornerstoneTools.regionsThreshold.getConfiguration();
    config.layersBelow = parseInt(event.target.value);
    cornerstoneTools.regionsThreshold.setConfiguration(config)
  },
  'change input[name="toolRegionValue"]':function(event, context) {
    console.log("HEjs");
    const config = cornerstoneTools.regionsThreshold.getConfiguration();
    config.toolRegionValue = parseInt(event.target.value);
    cornerstoneTools.regionsThreshold.setConfiguration(config)
  },
  'change input[name="calciumThresholdHu"]':function(event, context) {
    console.log(cornerstoneTools.regionsThreshold);
    const config = cornerstoneTools.regionsThreshold.getConfiguration();
    config.calciumThresholdHu = parseInt(event.target.value);
    cornerstoneTools.regionsThreshold.setConfiguration(config);
    cornerstoneTools.regionsThreshold.update();
  },
  'click #calculate': function(event, context){
    cornerstoneTools.regionsScore().then(scores => {
      context.state.set('scores', scores);
    });
  },
});
