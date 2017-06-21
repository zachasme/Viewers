(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Iron = Package['iron:core'].Iron;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var Log = Package.logging.Log;
var Tracker = Package.deps.Tracker;
var Deps = Package.deps.Deps;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var WADOProxy, Settings;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:wadoproxy":{"server":{"namespace.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_wadoproxy/server/namespace.js                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
WADOProxy = {};                                                                                                 // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"initialize.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_wadoproxy/server/initialize.js                                                                 //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Meteor = void 0;                                                                                            // 1
module.watch(require("meteor/meteor"), {                                                                        // 1
    Meteor: function (v) {                                                                                      // 1
        Meteor = v;                                                                                             // 1
    }                                                                                                           // 1
}, 0);                                                                                                          // 1
var OHIF = void 0;                                                                                              // 1
module.watch(require("meteor/ohif:core"), {                                                                     // 1
    OHIF: function (v) {                                                                                        // 1
        OHIF = v;                                                                                               // 1
    }                                                                                                           // 1
}, 1);                                                                                                          // 1
Settings = Object.assign({                                                                                      // 4
    uri: OHIF.utils.absoluteUrl("/__wado_proxy"),                                                               // 5
    enabled: true                                                                                               // 6
}, Meteor.settings && Meteor.settings.proxy ? Meteor.settings.proxy : {});                                      // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_wadoproxy/server/routes.js                                                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Meteor = void 0;                                                                                            // 1
module.watch(require("meteor/meteor"), {                                                                        // 1
    Meteor: function (v) {                                                                                      // 1
        Meteor = v;                                                                                             // 1
    }                                                                                                           // 1
}, 0);                                                                                                          // 1
var Router = void 0;                                                                                            // 1
module.watch(require("meteor/iron:router"), {                                                                   // 1
    Router: function (v) {                                                                                      // 1
        Router = v;                                                                                             // 1
    }                                                                                                           // 1
}, 1);                                                                                                          // 1
var Accounts = void 0;                                                                                          // 1
module.watch(require("meteor/accounts-base"), {                                                                 // 1
    Accounts: function (v) {                                                                                    // 1
        Accounts = v;                                                                                           // 1
    }                                                                                                           // 1
}, 2);                                                                                                          // 1
var OHIF = void 0;                                                                                              // 1
module.watch(require("meteor/ohif:core"), {                                                                     // 1
    OHIF: function (v) {                                                                                        // 1
        OHIF = v;                                                                                               // 1
    }                                                                                                           // 1
}, 3);                                                                                                          // 1
var Servers = void 0;                                                                                           // 1
module.watch(require("meteor/ohif:servers/both/collections"), {                                                 // 1
    Servers: function (v) {                                                                                     // 1
        Servers = v;                                                                                            // 1
    }                                                                                                           // 1
}, 4);                                                                                                          // 1
                                                                                                                //
var url = require('url');                                                                                       // 7
                                                                                                                //
var http = require('http');                                                                                     // 8
                                                                                                                //
var https = require('https');                                                                                   // 9
                                                                                                                //
var now = require('performance-now');                                                                           // 10
                                                                                                                //
var doAuth = Meteor.users.find().count() ? true : false;                                                        // 12
                                                                                                                //
var authenticateUser = function (request) {                                                                     // 14
    // Only allow logged-in users to access this route                                                          // 15
    var userId = request.headers['x-user-id'];                                                                  // 16
    var loginToken = request.headers['x-auth-token'];                                                           // 17
                                                                                                                //
    if (!userId || !loginToken) {                                                                               // 18
        return;                                                                                                 // 19
    }                                                                                                           // 20
                                                                                                                //
    var hashedToken = Accounts._hashLoginToken(loginToken);                                                     // 22
                                                                                                                //
    return Meteor.users.findOne({                                                                               // 24
        _id: userId,                                                                                            // 25
        'services.resume.loginTokens.hashedToken': hashedToken                                                  // 26
    });                                                                                                         // 24
}; // Setup a Route using Iron Router to avoid Cross-origin resource sharing                                    // 28
// (CORS) errors. We only handle this route on the Server.                                                      // 31
                                                                                                                //
                                                                                                                //
Router.route(Settings.uri.replace(OHIF.utils.absoluteUrl(), ''), function () {                                  // 32
    var request = this.request;                                                                                 // 33
    var response = this.response;                                                                               // 34
    var params = this.params;                                                                                   // 35
    var start = now();                                                                                          // 37
    var user = void 0;                                                                                          // 38
                                                                                                                //
    if (doAuth) {                                                                                               // 39
        user = authenticateUser(request);                                                                       // 40
                                                                                                                //
        if (!user) {                                                                                            // 41
            response.writeHead(401);                                                                            // 42
            response.end('Error: You must be logged in to perform this action.\n');                             // 43
            return;                                                                                             // 44
        }                                                                                                       // 45
    }                                                                                                           // 46
                                                                                                                //
    var end = now();                                                                                            // 48
    var authenticationTime = end - start;                                                                       // 49
    start = now();                                                                                              // 51
    var server = Servers.findOne(params.query.serverId);                                                        // 53
                                                                                                                //
    if (!server) {                                                                                              // 54
        response.writeHead(500);                                                                                // 55
        response.end('Error: No Server with the specified Server ID was found.\n');                             // 56
        return;                                                                                                 // 57
    }                                                                                                           // 58
                                                                                                                //
    var requestOpt = server.requestOptions; // If no Web Access to DICOM Objects (WADO) Service URL is provided
    // return an error for the request.                                                                         // 63
                                                                                                                //
    var wadoUrl = params.query.url;                                                                             // 64
                                                                                                                //
    if (!wadoUrl) {                                                                                             // 65
        response.writeHead(500);                                                                                // 66
        response.end('Error: No WADO URL was provided.\n');                                                     // 67
        return;                                                                                                 // 68
    }                                                                                                           // 69
                                                                                                                //
    if (requestOpt.logRequests) {                                                                               // 71
        console.log(request.url);                                                                               // 72
    }                                                                                                           // 73
                                                                                                                //
    start = now();                                                                                              // 75
                                                                                                                //
    if (requestOpt.logTiming) {                                                                                 // 76
        console.time(request.url);                                                                              // 77
    } // Use Node's URL parse to decode the query URL                                                           // 78
                                                                                                                //
                                                                                                                //
    var parsed = url.parse(wadoUrl); // Create an object to hold the information required                       // 81
    // for the request to the PACS.                                                                             // 84
                                                                                                                //
    var options = {                                                                                             // 85
        headers: {},                                                                                            // 86
        method: request.method,                                                                                 // 87
        hostname: parsed.hostname,                                                                              // 88
        path: parsed.path                                                                                       // 89
    };                                                                                                          // 85
    var requester = void 0;                                                                                     // 92
                                                                                                                //
    if (parsed.protocol === 'https:') {                                                                         // 93
        requester = https.request;                                                                              // 94
        var allowUnauthorizedAgent = new https.Agent({                                                          // 96
            rejectUnauthorized: false                                                                           // 96
        });                                                                                                     // 96
        options.agent = allowUnauthorizedAgent;                                                                 // 97
    } else {                                                                                                    // 98
        requester = http.request;                                                                               // 99
    }                                                                                                           // 100
                                                                                                                //
    if (parsed.port) {                                                                                          // 102
        options.port = parsed.port;                                                                             // 103
    }                                                                                                           // 104
                                                                                                                //
    Object.keys(request.headers).forEach(function (entry) {                                                     // 106
        var value = request.headers[entry];                                                                     // 107
                                                                                                                //
        if (entry) {                                                                                            // 108
            options.headers[entry] = value;                                                                     // 109
        }                                                                                                       // 110
    }); // Retrieve the authorization user:password string for the PACS,                                        // 111
    // if one is required, and include it in the request to the PACS.                                           // 114
                                                                                                                //
    if (requestOpt.auth) {                                                                                      // 115
        options.auth = requestOpt.auth;                                                                         // 116
    }                                                                                                           // 117
                                                                                                                //
    end = now();                                                                                                // 119
    var prepRequestTime = end - start; // Use Node's HTTP API to send a request to the PACS                     // 120
                                                                                                                //
    var proxyRequest = requester(options, function (proxyResponse) {                                            // 123
        // When we receive data from the PACS, stream it as the                                                 // 124
        // response to the original request.                                                                    // 125
        // console.log(`Got response: ${proxyResponse.statusCode}`);                                            // 126
        end = now();                                                                                            // 127
        var proxyReqTime = end - start;                                                                         // 128
        var totalProxyTime = authenticationTime + prepRequestTime + proxyReqTime;                               // 129
        var serverTimingHeaders = ("\n            auth=" + authenticationTime + "; \"Authenticate User\",\n            prep-req=" + prepRequestTime + "; \"Prepare Request Headers\",\n            proxy-req=" + proxyReqTime + "; \"Request to WADO URI\",\n            total-proxy=" + totalProxyTime + "; \"Total\",\n        ").replace(/\n/g, '');
        proxyResponse.headers['Server-Timing'] = serverTimingHeaders;                                           // 137
        response.writeHead(proxyResponse.statusCode, proxyResponse.headers);                                    // 139
                                                                                                                //
        if (requestOpt.logTiming) {                                                                             // 141
            console.timeEnd(request.url);                                                                       // 142
        }                                                                                                       // 143
                                                                                                                //
        return proxyResponse.pipe(response, {                                                                   // 145
            end: true                                                                                           // 145
        });                                                                                                     // 145
    }); // If our request to the PACS fails, log the error message                                              // 146
                                                                                                                //
    proxyRequest.on('error', function (error) {                                                                 // 149
        end = now();                                                                                            // 150
        var proxyReqTime = end - start;                                                                         // 151
        var totalProxyTime = authenticationTime + prepRequestTime + proxyReqTime;                               // 152
        console.timeEnd(request.url);                                                                           // 153
        var serverTimingHeaders = {                                                                             // 154
            'Server-Timing': ("\n                auth=" + authenticationTime + "; \"Authenticate User\",\n                prep-req=" + prepRequestTime + "; \"Prepare Request Headers\",\n                proxy-req=" + proxyReqTime + "; \"Request to WADO URI\",\n                total-proxy=" + totalProxyTime + "; \"Total\",\n            ").replace(/\n/g, '')
        };                                                                                                      // 154
        response.writeHead(500, serverTimingHeaders);                                                           // 163
        response.end("Error: Problem with request to PACS: " + error.message + "\n");                           // 164
    }); // Stream the original request information into the request                                             // 165
    // to the PACS                                                                                              // 168
                                                                                                                //
    request.pipe(proxyRequest);                                                                                 // 169
}, {                                                                                                            // 170
    where: 'server'                                                                                             // 171
});                                                                                                             // 170
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"convertURL.js":function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_wadoproxy/server/convertURL.js                                                                 //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var querystring = require("querystring");                                                                       // 1
                                                                                                                //
WADOProxy.convertURL = function (url, serverConfiguration) {                                                    // 3
    if (!Settings.enabled) {                                                                                    // 4
        return url;                                                                                             // 5
    }                                                                                                           // 6
                                                                                                                //
    if (!url) {                                                                                                 // 8
        return null;                                                                                            // 9
    }                                                                                                           // 10
                                                                                                                //
    var serverId = serverConfiguration._id;                                                                     // 12
    var query = querystring.stringify({                                                                         // 13
        url: url,                                                                                               // 13
        serverId: serverId                                                                                      // 13
    });                                                                                                         // 13
    return Settings.uri + "?" + query;                                                                          // 14
};                                                                                                              // 15
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"node_modules":{"performance-now":{"package.json":function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// .npm/package/node_modules/performance-now/package.json                                                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
exports.name = "performance-now";
exports.version = "2.1.0";
exports.main = "lib/performance-now.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"performance-now.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// node_modules/meteor/ohif_wadoproxy/node_modules/performance-now/lib/performance-now.js                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/ohif:wadoproxy/server/namespace.js");
require("./node_modules/meteor/ohif:wadoproxy/server/initialize.js");
require("./node_modules/meteor/ohif:wadoproxy/server/routes.js");
require("./node_modules/meteor/ohif:wadoproxy/server/convertURL.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ohif:wadoproxy'] = {}, {
  WADOProxy: WADOProxy
});

})();

//# sourceMappingURL=ohif_wadoproxy.js.map
