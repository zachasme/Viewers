import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Random } from 'meteor/random';
import { $ } from 'meteor/jquery';

import { OHIF } from 'meteor/ohif:core';
import { Viewerbase } from 'meteor/ohif:viewerbase';



let lastScores = []

Template.protocolEditor.helpers({
    config() {
      return cornerstoneTools.regionsThreshold.getConfiguration()
    },
    colors() {
      const colors = cornerstoneTools
        .regionsThreshold.getConfiguration().regionColorsRGB
        .map((color, i) => ({'color': color, 'derp': true, 'i': i+1}));
      console.log("YO",colors)
      return colors;
    },
    scores() {
      const colors = cornerstoneTools.regionsThreshold.getConfiguration().regionColorsRGB;
      const scores = lastScores.map((score, i) => ({
        'score': score,
        'color': colors[i],
      }));
      console.log(scores)
      return scores;
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
      lastScores = scores
      console.log(lastScores)
    });
  },
});
