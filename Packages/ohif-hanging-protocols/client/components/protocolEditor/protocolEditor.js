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
    }
});

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
