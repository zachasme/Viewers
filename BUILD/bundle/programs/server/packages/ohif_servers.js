(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Collection2 = Package['aldeed:collection2-core'].Collection2;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:servers":{"both":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/both/index.js                                                                    //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.watch(require("./base.js"));                                                                       // 1
module.watch(require("./collections"));                                                                   // 1
module.watch(require("./lib"));                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"base.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/both/base.js                                                                     //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var OHIF = void 0;                                                                                        // 1
module.watch(require("meteor/ohif:core"), {                                                               // 1
    OHIF: function (v) {                                                                                  // 1
        OHIF = v;                                                                                         // 1
    }                                                                                                     // 1
}, 0);                                                                                                    // 1
OHIF.servers = {                                                                                          // 3
    collections: {}                                                                                       // 4
};                                                                                                        // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collections":{"currentServer.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/both/collections/currentServer.js                                                //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.export({                                                                                           // 1
  CurrentServer: function () {                                                                            // 1
    return CurrentServer;                                                                                 // 1
  }                                                                                                       // 1
});                                                                                                       // 1
var Mongo = void 0;                                                                                       // 1
module.watch(require("meteor/mongo"), {                                                                   // 1
  Mongo: function (v) {                                                                                   // 1
    Mongo = v;                                                                                            // 1
  }                                                                                                       // 1
}, 0);                                                                                                    // 1
var OHIF = void 0;                                                                                        // 1
module.watch(require("meteor/ohif:core"), {                                                               // 1
  OHIF: function (v) {                                                                                    // 1
    OHIF = v;                                                                                             // 1
  }                                                                                                       // 1
}, 1);                                                                                                    // 1
// CurrentServer is a single document collection to describe which of the Servers is being used           // 4
var CurrentServer = new Mongo.Collection('currentServer');                                                // 5
CurrentServer._debugName = 'CurrentServer';                                                               // 6
OHIF.servers.collections.currentServer = CurrentServer;                                                   // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/both/collections/index.js                                                        //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.export({                                                                                           // 1
  CurrentServer: function () {                                                                            // 1
    return CurrentServer;                                                                                 // 1
  },                                                                                                      // 1
  Servers: function () {                                                                                  // 1
    return Servers;                                                                                       // 1
  }                                                                                                       // 1
});                                                                                                       // 1
var CurrentServer = void 0;                                                                               // 1
module.watch(require("./currentServer.js"), {                                                             // 1
  CurrentServer: function (v) {                                                                           // 1
    CurrentServer = v;                                                                                    // 1
  }                                                                                                       // 1
}, 0);                                                                                                    // 1
var Servers = void 0;                                                                                     // 1
module.watch(require("./servers.js"), {                                                                   // 1
  Servers: function (v) {                                                                                 // 1
    Servers = v;                                                                                          // 1
  }                                                                                                       // 1
}, 1);                                                                                                    // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"servers.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/both/collections/servers.js                                                      //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.export({                                                                                           // 1
  Servers: function () {                                                                                  // 1
    return Servers;                                                                                       // 1
  }                                                                                                       // 1
});                                                                                                       // 1
var Mongo = void 0;                                                                                       // 1
module.watch(require("meteor/mongo"), {                                                                   // 1
  Mongo: function (v) {                                                                                   // 1
    Mongo = v;                                                                                            // 1
  }                                                                                                       // 1
}, 0);                                                                                                    // 1
var OHIF = void 0;                                                                                        // 1
module.watch(require("meteor/ohif:core"), {                                                               // 1
  OHIF: function (v) {                                                                                    // 1
    OHIF = v;                                                                                             // 1
  }                                                                                                       // 1
}, 1);                                                                                                    // 1
// import { Servers as ServerSchema } from 'meteor/ohif:servers/both/schema/servers.js';                  // 3
// Servers describe the DICOM servers configurations                                                      // 5
var Servers = new Mongo.Collection('servers'); // TODO: Make the Schema match what we are currently sticking into the Collection
//Servers.attachSchema(ServerSchema);                                                                     // 8
                                                                                                          //
Servers._debugName = 'Servers';                                                                           // 9
OHIF.servers.collections.servers = Servers;                                                               // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"getCurrentServer.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/both/lib/getCurrentServer.js                                                     //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var OHIF = void 0;                                                                                        // 1
module.watch(require("meteor/ohif:core"), {                                                               // 1
    OHIF: function (v) {                                                                                  // 1
        OHIF = v;                                                                                         // 1
    }                                                                                                     // 1
}, 0);                                                                                                    // 1
var Servers = void 0,                                                                                     // 1
    CurrentServer = void 0;                                                                               // 1
module.watch(require("meteor/ohif:servers/both/collections"), {                                           // 1
    Servers: function (v) {                                                                               // 1
        Servers = v;                                                                                      // 1
    },                                                                                                    // 1
    CurrentServer: function (v) {                                                                         // 1
        CurrentServer = v;                                                                                // 1
    }                                                                                                     // 1
}, 1);                                                                                                    // 1
                                                                                                          //
/**                                                                                                       // 4
 * Retrieves the current server configuration used to retrieve studies                                    //
 */OHIF.servers.getCurrentServer = function () {                                                          //
    var currentServer = CurrentServer.findOne();                                                          // 8
                                                                                                          //
    if (!currentServer) {                                                                                 // 10
        return;                                                                                           // 11
    }                                                                                                     // 12
                                                                                                          //
    var serverConfiguration = Servers.findOne({                                                           // 14
        _id: currentServer.serverId                                                                       // 14
    });                                                                                                   // 14
    return serverConfiguration;                                                                           // 16
};                                                                                                        // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/both/lib/index.js                                                                //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.watch(require("./getCurrentServer.js"));                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"schema":{"servers.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/both/schema/servers.js                                                           //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.export({                                                                                           // 1
    DICOMWebRequestOptions: function () {                                                                 // 1
        return DICOMWebRequestOptions;                                                                    // 1
    },                                                                                                    // 1
    DICOMWebServer: function () {                                                                         // 1
        return DICOMWebServer;                                                                            // 1
    },                                                                                                    // 1
    DIMSEPeer: function () {                                                                              // 1
        return DIMSEPeer;                                                                                 // 1
    },                                                                                                    // 1
    DIMSEServer: function () {                                                                            // 1
        return DIMSEServer;                                                                               // 1
    },                                                                                                    // 1
    UISettings: function () {                                                                             // 1
        return UISettings;                                                                                // 1
    },                                                                                                    // 1
    PrefetchSchema: function () {                                                                         // 1
        return PrefetchSchema;                                                                            // 1
    },                                                                                                    // 1
    MouseButtonToolSchema: function () {                                                                  // 1
        return MouseButtonToolSchema;                                                                     // 1
    },                                                                                                    // 1
    PublicServerConfig: function () {                                                                     // 1
        return PublicServerConfig;                                                                        // 1
    },                                                                                                    // 1
    Servers: function () {                                                                                // 1
        return Servers;                                                                                   // 1
    },                                                                                                    // 1
    ServerConfiguration: function () {                                                                    // 1
        return ServerConfiguration;                                                                       // 1
    }                                                                                                     // 1
});                                                                                                       // 1
var SimpleSchema = void 0;                                                                                // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                    // 1
    SimpleSchema: function (v) {                                                                          // 1
        SimpleSchema = v;                                                                                 // 1
    }                                                                                                     // 1
}, 0);                                                                                                    // 1
var serverNameDefinitions = {                                                                             // 3
    type: String,                                                                                         // 4
    label: 'Server Name',                                                                                 // 5
    max: 100                                                                                              // 6
};                                                                                                        // 3
var serverTypeDefinitions = {                                                                             // 9
    type: String,                                                                                         // 10
    label: 'Server Type',                                                                                 // 11
    allowedValues: ['dicomWeb', 'dimse'],                                                                 // 12
    valuesLabels: ['DICOM Web', 'DIMSE'],                                                                 // 13
    optional: true                                                                                        // 14
};                                                                                                        // 9
var wadoUriRootDefinitions = {                                                                            // 17
    type: String,                                                                                         // 18
    label: 'WADO URI root',                                                                               // 19
    max: 1000                                                                                             // 20
};                                                                                                        // 17
var availableMouseButtonTools = ['wwwc', 'zoom', 'pan', 'stackScroll'];                                   // 23
var DICOMWebRequestOptions = new SimpleSchema({                                                           // 25
    auth: {                                                                                               // 26
        type: String,                                                                                     // 27
        label: 'Authentication',                                                                          // 28
        optional: true                                                                                    // 29
    },                                                                                                    // 26
    logRequests: {                                                                                        // 31
        type: Boolean,                                                                                    // 32
        defaultValue: true,                                                                               // 33
        label: 'Requests'                                                                                 // 34
    },                                                                                                    // 31
    logResponses: {                                                                                       // 36
        type: Boolean,                                                                                    // 37
        defaultValue: false,                                                                              // 38
        label: 'Responses'                                                                                // 39
    },                                                                                                    // 36
    logTiming: {                                                                                          // 41
        type: Boolean,                                                                                    // 42
        defaultValue: true,                                                                               // 43
        label: 'Timing'                                                                                   // 44
    }                                                                                                     // 41
});                                                                                                       // 25
var DICOMWebServer = new SimpleSchema({                                                                   // 48
    name: serverNameDefinitions,                                                                          // 49
    type: serverTypeDefinitions,                                                                          // 50
    wadoUriRoot: wadoUriRootDefinitions,                                                                  // 51
    wadoRoot: {                                                                                           // 52
        type: String,                                                                                     // 53
        label: 'WADO root',                                                                               // 54
        max: 1000                                                                                         // 55
    },                                                                                                    // 52
    imageRendering: {                                                                                     // 57
        type: String,                                                                                     // 58
        label: 'Image rendering',                                                                         // 59
        allowedValues: ['wadouri', 'orthanc'],                                                            // 60
        valuesLabels: ['WADO URI', 'ORTHANC']                                                             // 61
    },                                                                                                    // 57
    qidoRoot: {                                                                                           // 63
        type: String,                                                                                     // 64
        label: 'QIDO root',                                                                               // 65
        max: 1000                                                                                         // 66
    },                                                                                                    // 63
    qidoSupportsIncludeField: {                                                                           // 68
        type: Boolean,                                                                                    // 69
        label: 'QIDO supports including fields',                                                          // 70
        defaultValue: false                                                                               // 71
    },                                                                                                    // 68
    requestOptions: {                                                                                     // 73
        type: DICOMWebRequestOptions,                                                                     // 74
        label: 'Request Options'                                                                          // 75
    }                                                                                                     // 73
});                                                                                                       // 48
var DIMSEPeer = new SimpleSchema({                                                                        // 79
    aeTitle: {                                                                                            // 80
        type: String,                                                                                     // 81
        label: 'AE Title'                                                                                 // 82
    },                                                                                                    // 80
    hostAE: {                                                                                             // 84
        type: String,                                                                                     // 85
        label: 'AE Host',                                                                                 // 86
        optional: true                                                                                    // 87
    },                                                                                                    // 84
    host: {                                                                                               // 89
        type: String,                                                                                     // 90
        label: 'Host Domain/IP',                                                                          // 91
        regEx: SimpleSchema.RegEx.WeakDomain                                                              // 92
    },                                                                                                    // 89
    port: {                                                                                               // 94
        type: Number,                                                                                     // 95
        label: 'Port',                                                                                    // 96
        min: 1,                                                                                           // 97
        defaultValue: 11112,                                                                              // 98
        max: 65535                                                                                        // 99
    },                                                                                                    // 94
    "default": {                                                                                          // 101
        type: Boolean,                                                                                    // 102
        label: 'Default',                                                                                 // 103
        defaultValue: false                                                                               // 104
    },                                                                                                    // 101
    server: {                                                                                             // 106
        type: Boolean,                                                                                    // 107
        label: 'Server',                                                                                  // 108
        defaultValue: false                                                                               // 109
    },                                                                                                    // 106
    supportsInstanceRetrievalByStudyUid: {                                                                // 111
        type: Boolean,                                                                                    // 112
        label: 'Supports instance retrieval by StudyUid',                                                 // 113
        defaultValue: true                                                                                // 114
    }                                                                                                     // 111
});                                                                                                       // 79
var DIMSEServer = new SimpleSchema({                                                                      // 118
    name: serverNameDefinitions,                                                                          // 119
    type: serverTypeDefinitions,                                                                          // 120
    wadoUriRoot: wadoUriRootDefinitions,                                                                  // 121
    requestOptions: {                                                                                     // 122
        type: DICOMWebRequestOptions,                                                                     // 123
        label: 'Request Options'                                                                          // 124
    },                                                                                                    // 122
    peers: {                                                                                              // 126
        type: [DIMSEPeer],                                                                                // 127
        label: 'Peer List',                                                                               // 128
        minCount: 1                                                                                       // 129
    }                                                                                                     // 126
});                                                                                                       // 118
var UISettings = new SimpleSchema({                                                                       // 133
    studyListFunctionsEnabled: {                                                                          // 134
        type: Boolean,                                                                                    // 135
        label: 'Study List Functions Enabled?',                                                           // 136
        defaultValue: true                                                                                // 137
    },                                                                                                    // 134
    leftSidebarOpen: {                                                                                    // 139
        type: Boolean,                                                                                    // 140
        label: 'Left sidebar open by default?',                                                           // 141
        defaultValue: false                                                                               // 142
    },                                                                                                    // 139
    displaySetNavigationLoopOverSeries: {                                                                 // 144
        type: Boolean,                                                                                    // 145
        label: 'The UP/DOWN display set navigation buttons will start over when reach the last display set in viewport?',
        defaultValue: true                                                                                // 147
    },                                                                                                    // 144
    displaySetNavigationMultipleViewports: {                                                              // 149
        type: Boolean,                                                                                    // 150
        label: 'The UP/DOWN display set navigation buttons will iterate over all the viewports at once?',
        defaultValue: false                                                                               // 152
    },                                                                                                    // 149
    displayEchoUltrasoundWorkflow: {                                                                      // 154
        type: Boolean,                                                                                    // 155
        label: 'Enable cine dialog enhancements for multiframe images.',                                  // 156
        defaultValue: false                                                                               // 157
    },                                                                                                    // 154
    autoPositionMeasurementsTextCallOuts: {                                                               // 159
        type: String,                                                                                     // 160
        label: 'Auto position text call-outs for measurements when creating them.',                       // 161
        defaultValue: 'TRBL'                                                                              // 162
    },                                                                                                    // 159
    studyListDateFilterNumDays: {                                                                         // 164
        type: Number,                                                                                     // 165
        label: 'Number of days to be used on Study List date filter',                                     // 166
        min: 1                                                                                            // 167
    },                                                                                                    // 164
    showStackLoadingProgressBar: {                                                                        // 169
        type: Boolean,                                                                                    // 170
        label: 'Show a progress bar closest to the thumbnail showing how much the stack has loaded',      // 171
        defaultValue: true                                                                                // 172
    }                                                                                                     // 169
});                                                                                                       // 133
var PrefetchSchema = new SimpleSchema({                                                                   // 176
    order: {                                                                                              // 177
        type: String,                                                                                     // 178
        label: 'Prefetch Order',                                                                          // 179
        allowedValues: ['topdown', 'downward', 'closest'],                                                // 180
        optional: false                                                                                   // 181
    },                                                                                                    // 177
    displaySetCount: {                                                                                    // 183
        type: Number,                                                                                     // 184
        label: 'Display Set Count',                                                                       // 185
        min: 1,                                                                                           // 186
        defaultValue: 1                                                                                   // 187
    }                                                                                                     // 183
});                                                                                                       // 176
var MouseButtonToolSchema = new SimpleSchema({                                                            // 191
    left: {                                                                                               // 192
        type: String,                                                                                     // 193
        label: 'Left Mouse Button',                                                                       // 194
        allowedValues: availableMouseButtonTools,                                                         // 195
        optional: true                                                                                    // 196
    },                                                                                                    // 192
    right: {                                                                                              // 198
        type: String,                                                                                     // 199
        label: 'Right Mouse Button',                                                                      // 200
        allowedValues: availableMouseButtonTools,                                                         // 201
        optional: true                                                                                    // 202
    },                                                                                                    // 198
    middle: {                                                                                             // 204
        type: String,                                                                                     // 205
        label: 'Middle Mouse Button',                                                                     // 206
        allowedValues: availableMouseButtonTools,                                                         // 207
        optional: true                                                                                    // 208
    }                                                                                                     // 204
});                                                                                                       // 191
var PublicServerConfig = new SimpleSchema({                                                               // 212
    verifyEmail: {                                                                                        // 213
        type: Boolean,                                                                                    // 214
        label: 'Verify Email',                                                                            // 215
        defaultValue: false                                                                               // 216
    },                                                                                                    // 213
    demoUserEnabled: {                                                                                    // 218
        type: Boolean,                                                                                    // 219
        label: 'Creates demo user on startup and show TestDrive button',                                  // 220
        defaultValue: true                                                                                // 221
    },                                                                                                    // 218
    ui: {                                                                                                 // 223
        type: UISettings,                                                                                 // 224
        label: 'UI Settings'                                                                              // 225
    },                                                                                                    // 223
    prefetch: {                                                                                           // 227
        type: PrefetchSchema,                                                                             // 228
        label: 'Prefetch settings'                                                                        // 229
    },                                                                                                    // 227
    defaultMouseButtonTools: {                                                                            // 231
        type: MouseButtonToolSchema,                                                                      // 232
        label: 'Default Mouse Button Tools'                                                               // 233
    }                                                                                                     // 231
});                                                                                                       // 212
var Servers = new SimpleSchema({                                                                          // 237
    dicomWeb: {                                                                                           // 238
        type: [DICOMWebServer],                                                                           // 239
        label: 'DICOMWeb Servers',                                                                        // 240
        optional: true                                                                                    // 241
    },                                                                                                    // 238
    dimse: {                                                                                              // 243
        type: [DIMSEServer],                                                                              // 244
        label: 'DIMSE Servers',                                                                           // 245
        optional: true                                                                                    // 246
    }                                                                                                     // 243
});                                                                                                       // 237
var ServerConfiguration = new SimpleSchema({                                                              // 250
    servers: {                                                                                            // 251
        type: Servers,                                                                                    // 252
        label: 'Servers'                                                                                  // 253
    },                                                                                                    // 251
    defaultServiceType: {                                                                                 // 255
        type: String,                                                                                     // 256
        label: 'Default Service Type',                                                                    // 257
        defaultValue: 'dicomWeb'                                                                          // 258
    },                                                                                                    // 255
    dropCollections: {                                                                                    // 260
        type: Boolean,                                                                                    // 261
        label: 'Drop database collections',                                                               // 262
        defaultValue: false                                                                               // 263
    },                                                                                                    // 260
    "public": {                                                                                           // 265
        type: PublicServerConfig,                                                                         // 266
        label: 'Public Server Configuration'                                                              // 267
    },                                                                                                    // 265
    origin: {                                                                                             // 269
        type: String,                                                                                     // 270
        label: 'Origin',                                                                                  // 271
        optional: true                                                                                    // 272
    }                                                                                                     // 269
});                                                                                                       // 250
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/server/index.js                                                                  //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.watch(require("./publications.js"));                                                               // 1
module.watch(require("./methods.js"));                                                                    // 1
module.watch(require("./startup.js"));                                                                    // 1
module.watch(require("./lib"));                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/server/methods.js                                                                //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
    Meteor: function (v) {                                                                                // 1
        Meteor = v;                                                                                       // 1
    }                                                                                                     // 1
}, 0);                                                                                                    // 1
var OHIF = void 0;                                                                                        // 1
module.watch(require("meteor/ohif:core"), {                                                               // 1
    OHIF: function (v) {                                                                                  // 1
        OHIF = v;                                                                                         // 1
    }                                                                                                     // 1
}, 1);                                                                                                    // 1
Meteor.methods({                                                                                          // 4
    serverFind: function (query) {                                                                        // 5
        return OHIF.servers.control.find(query);                                                          // 5
    },                                                                                                    // 5
    serverSave: function (serverSettings) {                                                               // 6
        return OHIF.servers.control.save(serverSettings);                                                 // 6
    },                                                                                                    // 6
    serverSetActive: function (serverId) {                                                                // 7
        return OHIF.servers.control.setActive(serverId);                                                  // 7
    },                                                                                                    // 7
    serverRemove: function (serverId) {                                                                   // 8
        return OHIF.servers.control.remove(serverId);                                                     // 8
    }                                                                                                     // 8
});                                                                                                       // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/server/publications.js                                                           //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
    Meteor: function (v) {                                                                                // 1
        Meteor = v;                                                                                       // 1
    }                                                                                                     // 1
}, 0);                                                                                                    // 1
var Servers = void 0,                                                                                     // 1
    CurrentServer = void 0;                                                                               // 1
module.watch(require("meteor/ohif:servers/both/collections"), {                                           // 1
    Servers: function (v) {                                                                               // 1
        Servers = v;                                                                                      // 1
    },                                                                                                    // 1
    CurrentServer: function (v) {                                                                         // 1
        CurrentServer = v;                                                                                // 1
    }                                                                                                     // 1
}, 1);                                                                                                    // 1
// When publishing Servers Collection, do not publish the requestOptions.headers                          // 4
// field in case any authentication information is being passed                                           // 5
Meteor.publish('servers', function () {                                                                   // 6
    return Servers.find({}, {                                                                             // 6
        fields: {                                                                                         // 7
            'requestOptions.headers': 0                                                                   // 7
        }                                                                                                 // 7
    });                                                                                                   // 6
});                                                                                                       // 6
Meteor.publish('currentServer', function () {                                                             // 10
    return CurrentServer.find();                                                                          // 10
});                                                                                                       // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"startup.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/server/startup.js                                                                //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
    Meteor: function (v) {                                                                                // 1
        Meteor = v;                                                                                       // 1
    }                                                                                                     // 1
}, 0);                                                                                                    // 1
                                                                                                          //
var _ = void 0;                                                                                           // 1
                                                                                                          //
module.watch(require("meteor/underscore"), {                                                              // 1
    _: function (v) {                                                                                     // 1
        _ = v;                                                                                            // 1
    }                                                                                                     // 1
}, 1);                                                                                                    // 1
var OHIF = void 0;                                                                                        // 1
module.watch(require("meteor/ohif:core"), {                                                               // 1
    OHIF: function (v) {                                                                                  // 1
        OHIF = v;                                                                                         // 1
    }                                                                                                     // 1
}, 2);                                                                                                    // 1
var Servers = void 0;                                                                                     // 1
module.watch(require("meteor/ohif:servers/both/collections"), {                                           // 1
    Servers: function (v) {                                                                               // 1
        Servers = v;                                                                                      // 1
    }                                                                                                     // 1
}, 3);                                                                                                    // 1
var ServerConfiguration = void 0;                                                                         // 1
module.watch(require("meteor/ohif:servers/both/schema/servers.js"), {                                     // 1
    ServerConfiguration: function (v) {                                                                   // 1
        ServerConfiguration = v;                                                                          // 1
    }                                                                                                     // 1
}, 4);                                                                                                    // 1
// Check the servers on meteor startup                                                                    // 7
Meteor.startup(function () {                                                                              // 8
    OHIF.log.info('Updating servers information from JSON configuration');                                // 9
                                                                                                          //
    _.each(Meteor.settings.servers, function (endpoints, serverType) {                                    // 11
        _.each(endpoints, function (endpoint) {                                                           // 12
            var server = _.clone(endpoint);                                                               // 13
                                                                                                          //
            server.origin = 'json';                                                                       // 14
            server.type = serverType; // Try to find a server with the same name/type/origin combination  // 15
                                                                                                          //
            var existingServer = Servers.findOne({                                                        // 18
                name: server.name,                                                                        // 19
                type: server.type,                                                                        // 20
                origin: server.origin                                                                     // 21
            }); // Check if server was already added. Update it if so and insert if not                   // 18
                                                                                                          //
            if (existingServer) {                                                                         // 25
                var newServerData = _.clone(existingServer);                                              // 26
                                                                                                          //
                delete newServerData._id;                                                                 // 27
                Servers.update(existingServer._id, {                                                      // 28
                    $set: newServerData                                                                   // 28
                });                                                                                       // 28
            } else {                                                                                      // 29
                Servers.insert(server);                                                                   // 30
            }                                                                                             // 31
        });                                                                                               // 32
    });                                                                                                   // 33
                                                                                                          //
    OHIF.servers.control.resetCurrentServer();                                                            // 35
}); // Validate the servers configuration                                                                 // 36
                                                                                                          //
Meteor.startup(function () {                                                                              // 39
    // Save custom properties (if any)...                                                                 // 40
    // "Meteor.settings" and "Meteor.settings.public" are set by default...                               // 41
    var custom = {                                                                                        // 42
        "private": Meteor.settings.custom,                                                                // 43
        "public": Meteor.settings.public.custom                                                           // 44
    }; // ... and remove them to prevent clean up                                                         // 42
                                                                                                          //
    delete Meteor.settings.custom;                                                                        // 48
    delete Meteor.settings.public.custom;                                                                 // 49
    ServerConfiguration.clean(Meteor.settings); // TODO: Make the error messages more clear               // 51
    // Taking this out for now to prevent confusion.                                                      // 54
    // check(Meteor.settings, ServerConfiguration);                                                       // 55
                                                                                                          //
    Meteor.settings.custom = custom.private;                                                              // 57
    Meteor.settings.public.custom = custom.public;                                                        // 58
    OHIF.log.info(JSON.stringify(Meteor.settings, null, 2));                                              // 60
});                                                                                                       // 61
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"control.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/server/lib/control.js                                                            //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var Meteor = void 0;                                                                                      // 1
module.watch(require("meteor/meteor"), {                                                                  // 1
    Meteor: function (v) {                                                                                // 1
        Meteor = v;                                                                                       // 1
    }                                                                                                     // 1
}, 0);                                                                                                    // 1
var OHIF = void 0;                                                                                        // 1
module.watch(require("meteor/ohif:core"), {                                                               // 1
    OHIF: function (v) {                                                                                  // 1
        OHIF = v;                                                                                         // 1
    }                                                                                                     // 1
}, 1);                                                                                                    // 1
var Servers = void 0,                                                                                     // 1
    CurrentServer = void 0;                                                                               // 1
module.watch(require("meteor/ohif:servers/both/collections"), {                                           // 1
    Servers: function (v) {                                                                               // 1
        Servers = v;                                                                                      // 1
    },                                                                                                    // 1
    CurrentServer: function (v) {                                                                         // 1
        CurrentServer = v;                                                                                // 1
    }                                                                                                     // 1
}, 2);                                                                                                    // 1
OHIF.servers.control = {                                                                                  // 5
    writeCallback: function (error, affected) {                                                           // 6
        if (error) {                                                                                      // 7
            throw new Meteor.Error('data-write', error);                                                  // 8
        }                                                                                                 // 9
    },                                                                                                    // 10
    resetCurrentServer: function () {                                                                     // 12
        var currentServer = CurrentServer.findOne();                                                      // 13
                                                                                                          //
        if (currentServer && Servers.find({                                                               // 14
            _id: currentServer.serverId                                                                   // 14
        }).count()) {                                                                                     // 14
            return;                                                                                       // 15
        }                                                                                                 // 16
                                                                                                          //
        var newServer = Servers.findOne({                                                                 // 18
            origin: 'json',                                                                               // 19
            type: Meteor.settings.defaultServiceType || 'dicomWeb'                                        // 20
        });                                                                                               // 18
                                                                                                          //
        if (newServer) {                                                                                  // 23
            CurrentServer.remove({});                                                                     // 24
            CurrentServer.insert({                                                                        // 25
                serverId: newServer._id                                                                   // 26
            });                                                                                           // 25
        }                                                                                                 // 28
    },                                                                                                    // 29
    find: function (query) {                                                                              // 31
        return Servers.find(query).fetch();                                                               // 32
    },                                                                                                    // 33
    save: function (serverSettings) {                                                                     // 35
        var query = {                                                                                     // 36
            _id: serverSettings._id                                                                       // 37
        };                                                                                                // 36
        var options = {                                                                                   // 39
            upsert: true                                                                                  // 40
        };                                                                                                // 39
                                                                                                          //
        if (!serverSettings._id) {                                                                        // 43
            delete serverSettings._id;                                                                    // 44
        }                                                                                                 // 45
                                                                                                          //
        return Servers.update(query, serverSettings, options, this.writeCallback);                        // 47
    },                                                                                                    // 48
    setActive: function (serverId) {                                                                      // 50
        CurrentServer.remove({});                                                                         // 51
        CurrentServer.insert({                                                                            // 52
            serverId: serverId                                                                            // 53
        });                                                                                               // 52
    },                                                                                                    // 55
    remove: function (serverId) {                                                                         // 57
        var query = {                                                                                     // 58
            _id: serverId                                                                                 // 59
        };                                                                                                // 58
        var removeStatus = Servers.remove(query, this.writeCallback);                                     // 62
        OHIF.servers.control.resetCurrentServer();                                                        // 64
        return removeStatus;                                                                              // 66
    }                                                                                                     // 67
};                                                                                                        // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/ohif_servers/server/lib/index.js                                                              //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.watch(require("./control.js"));                                                                    // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/ohif:servers/both/index.js");
require("./node_modules/meteor/ohif:servers/server/index.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ohif:servers'] = {};

})();

//# sourceMappingURL=ohif_servers.js.map
