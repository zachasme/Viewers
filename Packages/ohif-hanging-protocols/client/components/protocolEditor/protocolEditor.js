import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Random } from 'meteor/random';
import { $ } from 'meteor/jquery';

import { OHIF } from 'meteor/ohif:core';
import { Viewerbase } from 'meteor/ohif:viewerbase';


Template.protocolEditor.onCreated(function(){
  this.state = new ReactiveDict();
  this.state.setDefault({
    scores: cornerstoneTools.regionsThreshold.getConfiguration().regionColorsRGB.slice(1).map(
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
          'score': i === 0 ? 0 : Math.round(lastScores[i-1]),
        }));
      console.log("YO",colors)
      return colors;
    },
});

Template.protocolEditor.events({
  'change #layersAbove':function(event, context) {
    const config = cornerstoneTools.regionsThreshold.getConfiguration();
    config.layersAbove = parseInt(event.target.value);
    console.log(config);
    cornerstoneTools.regionsThreshold.setConfiguration(config)
  },
  'change #layersBelow':function(event, context) {
    const config = cornerstoneTools.regionsThreshold.getConfiguration();
    config.layersBelow = parseInt(event.target.value);
    cornerstoneTools.regionsThreshold.setConfiguration(config)
  },
  'change input[name="toolRegionValue"]':function(event, context) {
    const config = cornerstoneTools.regionsThreshold.getConfiguration();
    config.toolRegionValue = parseInt(event.target.value);
    cornerstoneTools.regionsThreshold.setConfiguration(config)
  },
  'click #calculate': function(event, context){

    // Create the object for the instance metadata
    let instance;

    OHIF.viewer.StudyMetadataList.find(studyMetadata => {
        // Search for the instance that has the current imageId
        instance = studyMetadata.findInstance(instance => {
            return true; //instance.getImageId() === imageId;
        });

        // If instance if found stop the search
        return !!instance;
    });

    const data = instance._data;
    console.log(data);
    const attributes = {
      SliceThickness: data.sliceThickness,
      PixelSpacing: data.pixelSpacing.split('\\').map(parseFloat),
      KVP: data.KPV,
      RescaleSlope: data.RescaleSlope,
      RescaleIntercept: data.RescaleIntercept,
    };
    console.log("scoring using these attributes: ", attributes)

    cornerstoneTools.regionsScore(attributes).then(scores => {
      context.state.set('scores', scores);
    });
  },
});
