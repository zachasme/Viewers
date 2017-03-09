Settings = (Meteor.settings && Meteor.settings.proxy) ? Meteor.settings.proxy :  {
    uri : "/__wado_proxy",
    enabled: true
};

console.log('WADOPROXY SETTINGS');
console.log(Settings);

http = require("http");
url = require("url");
querystring = require("querystring");
