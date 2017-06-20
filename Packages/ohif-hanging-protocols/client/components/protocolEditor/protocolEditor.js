import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Random } from 'meteor/random';
import { $ } from 'meteor/jquery';

import { OHIF } from 'meteor/ohif:core';
import 'meteor/ohif:viewerbase';

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
    const attributes = {
      SliceThickness: 3,
      PixelSpacing: [0.6, 0.6],
      KVP: 120,
      RescaleSlope: 1,
      RescaleIntercept: 1024,
    };
    cornerstoneTools.regionScores(attributes).then(scores => {
      console.log("SCORES", scores)
    });
  },
});
