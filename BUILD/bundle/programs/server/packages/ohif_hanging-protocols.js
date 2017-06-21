(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var Random = Package.random.Random;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var moment = Package['momentjs:moment'].moment;
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
var EJSON = Package.ejson.EJSON;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var HP, HangingProtocols, indexToRemove;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:hanging-protocols":{"both":{"namespace.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/namespace.js                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
HP = {};                                                                                                              // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collections.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/collections.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
HangingProtocols = new Meteor.Collection('hangingprotocols');                                                         // 1
HangingProtocols._debugName = 'HangingProtocols';                                                                     // 2
HangingProtocols.allow({                                                                                              // 4
    insert: function () {                                                                                             // 5
        return true;                                                                                                  // 6
    },                                                                                                                // 7
    update: function () {                                                                                             // 8
        return true;                                                                                                  // 9
    },                                                                                                                // 10
    remove: function () {                                                                                             // 11
        return true;                                                                                                  // 12
    }                                                                                                                 // 13
}); // @TODO: Remove this after stabilizing ProtocolEngine                                                            // 4
                                                                                                                      //
if (Meteor.isDevelopment && Meteor.isServer) {                                                                        // 17
    Meteor.startup(function () {                                                                                      // 18
        HangingProtocols.remove({});                                                                                  // 19
    });                                                                                                               // 20
}                                                                                                                     // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/schema.js                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./classes/Protocol"));                                                                          // 1
module.watch(require("./classes/Stage"));                                                                             // 1
module.watch(require("./classes/Viewport"));                                                                          // 1
module.watch(require("./classes/ViewportStructure"));                                                                 // 1
module.watch(require("./classes/rules/ProtocolMatchingRule"));                                                        // 1
module.watch(require("./classes/rules/StudyMatchingRule"));                                                           // 1
module.watch(require("./classes/rules/SeriesMatchingRule"));                                                          // 1
module.watch(require("./classes/rules/ImageMatchingRule"));                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hardcodedData.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/hardcodedData.js                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
HP.attributeDefaults = {                                                                                              // 1
    abstractPriorValue: 0                                                                                             // 2
};                                                                                                                    // 1
HP.displaySettings = {                                                                                                // 5
    invert: {                                                                                                         // 6
        id: 'invert',                                                                                                 // 7
        text: 'Show Grayscale Inverted',                                                                              // 8
        defaultValue: 'NO',                                                                                           // 9
        options: ['YES', 'NO']                                                                                        // 10
    }                                                                                                                 // 6
}; // @TODO Fix abstractPriorValue comparison                                                                         // 5
                                                                                                                      //
HP.studyAttributes = [{                                                                                               // 15
    id: 'x00100020',                                                                                                  // 16
    text: '(x00100020) Patient ID'                                                                                    // 17
}, {                                                                                                                  // 15
    id: 'x0020000d',                                                                                                  // 19
    text: '(x0020000d) Study Instance UID'                                                                            // 20
}, {                                                                                                                  // 18
    id: 'x00080020',                                                                                                  // 22
    text: '(x00080020) Study Date'                                                                                    // 23
}, {                                                                                                                  // 21
    id: 'x00080030',                                                                                                  // 25
    text: '(x00080030) Study Time'                                                                                    // 26
}, {                                                                                                                  // 24
    id: 'x00081030',                                                                                                  // 28
    text: '(x00081030) Study Description'                                                                             // 29
}, {                                                                                                                  // 27
    id: 'abstractPriorValue',                                                                                         // 31
    text: 'Abstract Prior Value'                                                                                      // 32
}];                                                                                                                   // 30
HP.protocolAttributes = [{                                                                                            // 35
    id: 'x00100020',                                                                                                  // 36
    text: '(x00100020) Patient ID'                                                                                    // 37
}, {                                                                                                                  // 35
    id: 'x0020000d',                                                                                                  // 39
    text: '(x0020000d) Study Instance UID'                                                                            // 40
}, {                                                                                                                  // 38
    id: 'x00080020',                                                                                                  // 42
    text: '(x00080020) Study Date'                                                                                    // 43
}, {                                                                                                                  // 41
    id: 'x00080030',                                                                                                  // 45
    text: '(x00080030) Study Time'                                                                                    // 46
}, {                                                                                                                  // 44
    id: 'x00081030',                                                                                                  // 48
    text: '(x00081030) Study Description'                                                                             // 49
}, {                                                                                                                  // 47
    id: 'anatomicRegion',                                                                                             // 51
    text: 'Anatomic Region'                                                                                           // 52
}];                                                                                                                   // 50
HP.seriesAttributes = [{                                                                                              // 55
    id: 'x0020000e',                                                                                                  // 56
    text: '(x0020000e) Series Instance UID'                                                                           // 57
}, {                                                                                                                  // 55
    id: 'x00080060',                                                                                                  // 59
    text: '(x00080060) Modality'                                                                                      // 60
}, {                                                                                                                  // 58
    id: 'x00200011',                                                                                                  // 62
    text: '(x00200011) Series Number'                                                                                 // 63
}, {                                                                                                                  // 61
    id: 'x0008103e',                                                                                                  // 65
    text: '(x0008103e) Series Description'                                                                            // 66
}, {                                                                                                                  // 64
    id: 'numImages',                                                                                                  // 68
    text: 'Number of Images'                                                                                          // 69
}];                                                                                                                   // 67
HP.instanceAttributes = [{                                                                                            // 72
    id: 'x00080016',                                                                                                  // 73
    text: '(x00080016) SOP Class UID'                                                                                 // 74
}, {                                                                                                                  // 72
    id: 'x00080018',                                                                                                  // 76
    text: '(x00080018) SOP Instance UID'                                                                              // 77
}, {                                                                                                                  // 75
    id: 'x00185101',                                                                                                  // 79
    text: '(x00185101) View Position'                                                                                 // 80
}, {                                                                                                                  // 78
    id: 'x00200013',                                                                                                  // 82
    text: '(x00200013) Instance Number'                                                                               // 83
}, {                                                                                                                  // 81
    id: 'x00080008',                                                                                                  // 85
    text: '(x00080008) Image Type'                                                                                    // 86
}, {                                                                                                                  // 84
    id: 'x00181063',                                                                                                  // 88
    text: '(x00181063) Frame Time'                                                                                    // 89
}, {                                                                                                                  // 87
    id: 'x00200060',                                                                                                  // 91
    text: '(x00200060) Laterality'                                                                                    // 92
}, {                                                                                                                  // 90
    id: 'x00541330',                                                                                                  // 94
    text: '(x00541330) Image Index'                                                                                   // 95
}, {                                                                                                                  // 93
    id: 'x00280004',                                                                                                  // 97
    text: '(x00280004) Photometric Interpretation'                                                                    // 98
}, {                                                                                                                  // 96
    id: 'x00180050',                                                                                                  // 100
    text: '(x00180050) Slice Thickness'                                                                               // 101
}];                                                                                                                   // 99
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"testData.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/testData.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
function getDefaultProtocol() {                                                                                       // 1
    var protocol = new HP.Protocol('Default');                                                                        // 2
    protocol.id = 'defaultProtocol';                                                                                  // 3
    protocol.locked = true;                                                                                           // 4
    var oneByOne = new HP.ViewportStructure('grid', {                                                                 // 6
        rows: 1,                                                                                                      // 7
        columns: 1                                                                                                    // 8
    });                                                                                                               // 6
    var viewport = new HP.Viewport();                                                                                 // 11
    var first = new HP.Stage(oneByOne, 'oneByOne');                                                                   // 12
    first.viewports.push(viewport);                                                                                   // 13
    protocol.stages.push(first);                                                                                      // 15
    HP.defaultProtocol = protocol;                                                                                    // 17
    return HP.defaultProtocol;                                                                                        // 18
}                                                                                                                     // 19
                                                                                                                      //
function getMRTwoByTwoTest() {                                                                                        // 21
    var proto = new HP.Protocol('MR_TwoByTwo');                                                                       // 22
    proto.id = 'MR_TwoByTwo';                                                                                         // 23
    proto.locked = true; // Use http://localhost:3000/viewer/1.2.840.113619.2.5.1762583153.215519.978957063.78        // 24
                                                                                                                      //
    var studyInstanceUid = new HP.ProtocolMatchingRule('studyInstanceUid', {                                          // 27
        equals: {                                                                                                     // 28
            value: '1.2.840.113619.2.5.1762583153.215519.978957063.78'                                                // 29
        }                                                                                                             // 28
    }, true);                                                                                                         // 27
    proto.addProtocolMatchingRule(studyInstanceUid);                                                                  // 33
    var oneByTwo = new HP.ViewportStructure('grid', {                                                                 // 35
        rows: 1,                                                                                                      // 36
        columns: 2                                                                                                    // 37
    }); // Stage 1                                                                                                    // 35
                                                                                                                      //
    var left = new HP.Viewport();                                                                                     // 41
    var right = new HP.Viewport();                                                                                    // 42
    var firstSeries = new HP.SeriesMatchingRule('seriesNumber', {                                                     // 44
        equals: {                                                                                                     // 45
            value: 1                                                                                                  // 46
        }                                                                                                             // 45
    });                                                                                                               // 44
    var secondSeries = new HP.SeriesMatchingRule('seriesNumber', {                                                    // 50
        equals: {                                                                                                     // 51
            value: 2                                                                                                  // 52
        }                                                                                                             // 51
    });                                                                                                               // 50
    var thirdImage = new HP.ImageMatchingRule('instanceNumber', {                                                     // 56
        equals: {                                                                                                     // 57
            value: 3                                                                                                  // 58
        }                                                                                                             // 57
    });                                                                                                               // 56
    left.seriesMatchingRules.push(firstSeries);                                                                       // 62
    left.imageMatchingRules.push(thirdImage);                                                                         // 63
    right.seriesMatchingRules.push(secondSeries);                                                                     // 65
    right.imageMatchingRules.push(thirdImage);                                                                        // 66
    var first = new HP.Stage(oneByTwo, 'oneByTwo');                                                                   // 68
    first.viewports.push(left);                                                                                       // 69
    first.viewports.push(right);                                                                                      // 70
    proto.stages.push(first); // Stage 2                                                                              // 72
                                                                                                                      //
    var twoByOne = new HP.ViewportStructure('grid', {                                                                 // 75
        rows: 2,                                                                                                      // 76
        columns: 1                                                                                                    // 77
    });                                                                                                               // 75
    var left2 = new HP.Viewport();                                                                                    // 79
    var right2 = new HP.Viewport();                                                                                   // 80
    var fourthSeries = new HP.SeriesMatchingRule('seriesNumber', {                                                    // 82
        equals: {                                                                                                     // 83
            value: 4                                                                                                  // 84
        }                                                                                                             // 83
    });                                                                                                               // 82
    var fifthSeries = new HP.SeriesMatchingRule('seriesNumber', {                                                     // 88
        equals: {                                                                                                     // 89
            value: 5                                                                                                  // 90
        }                                                                                                             // 89
    });                                                                                                               // 88
    left2.seriesMatchingRules.push(fourthSeries);                                                                     // 94
    left2.imageMatchingRules.push(thirdImage);                                                                        // 95
    right2.seriesMatchingRules.push(fifthSeries);                                                                     // 96
    right2.imageMatchingRules.push(thirdImage);                                                                       // 97
    var second = new HP.Stage(twoByOne, 'twoByOne');                                                                  // 99
    second.viewports.push(left2);                                                                                     // 100
    second.viewports.push(right2);                                                                                    // 101
    proto.stages.push(second);                                                                                        // 103
    HP.testProtocol = proto;                                                                                          // 105
    return HP.testProtocol;                                                                                           // 106
}                                                                                                                     // 107
                                                                                                                      //
function getDemoProtocols() {                                                                                         // 109
    HP.demoProtocols = []; /**                                                                                        // 111
                            * Demo #1                                                                                 //
                            */                                                                                        //
    HP.demoProtocols.push({                                                                                           // 116
        "id": "demoProtocol1",                                                                                        // 117
        "locked": false,                                                                                              // 118
        "name": "DFCI-CT-CHEST-COMPARE",                                                                              // 119
        "createdDate": "2017-02-14T16:07:09.033Z",                                                                    // 120
        "modifiedDate": "2017-02-14T16:18:43.930Z",                                                                   // 121
        "availableTo": {},                                                                                            // 122
        "editableBy": {},                                                                                             // 123
        "protocolMatchingRules": [{                                                                                   // 124
            "id": "7tmuq7KzDMCWFeapc",                                                                                // 126
            "weight": 2,                                                                                              // 127
            "required": false,                                                                                        // 128
            "attribute": "x00081030",                                                                                 // 129
            "constraint": {                                                                                           // 130
                "contains": {                                                                                         // 131
                    "value": "DFCI CT CHEST"                                                                          // 132
                }                                                                                                     // 131
            }                                                                                                         // 130
        }],                                                                                                           // 125
        "stages": [{                                                                                                  // 137
            "id": "v5PfGt9F6mffZPif5",                                                                                // 139
            "name": "oneByOne",                                                                                       // 140
            "viewportStructure": {                                                                                    // 141
                "type": "grid",                                                                                       // 142
                "properties": {                                                                                       // 143
                    "rows": 1,                                                                                        // 144
                    "columns": 2                                                                                      // 145
                },                                                                                                    // 143
                "layoutTemplateName": "gridLayout"                                                                    // 147
            },                                                                                                        // 141
            "viewports": [{                                                                                           // 149
                "viewportSettings": {},                                                                               // 151
                "imageMatchingRules": [],                                                                             // 152
                "seriesMatchingRules": [{                                                                             // 153
                    "id": "mXnsCcNzZL56z7mTZ",                                                                        // 155
                    "weight": 1,                                                                                      // 156
                    "required": false,                                                                                // 157
                    "attribute": "x0008103e",                                                                         // 158
                    "constraint": {                                                                                   // 159
                        "contains": {                                                                                 // 160
                            "value": "2.0"                                                                            // 161
                        }                                                                                             // 160
                    }                                                                                                 // 159
                }],                                                                                                   // 154
                "studyMatchingRules": []                                                                              // 166
            }, {                                                                                                      // 150
                "viewportSettings": {},                                                                               // 169
                "imageMatchingRules": [],                                                                             // 170
                "seriesMatchingRules": [{                                                                             // 171
                    "id": "ygz4nb28iJZcJhnYa",                                                                        // 173
                    "weight": 1,                                                                                      // 174
                    "required": false,                                                                                // 175
                    "attribute": "x0008103e",                                                                         // 176
                    "constraint": {                                                                                   // 177
                        "contains": {                                                                                 // 178
                            "value": "2.0"                                                                            // 179
                        }                                                                                             // 178
                    }                                                                                                 // 177
                }],                                                                                                   // 172
                "studyMatchingRules": [{                                                                              // 184
                    "id": "uDoEgLTvnXTByWnPz",                                                                        // 186
                    "weight": 1,                                                                                      // 187
                    "required": false,                                                                                // 188
                    "attribute": "abstractPriorValue",                                                                // 189
                    "constraint": {                                                                                   // 190
                        "equals": {                                                                                   // 191
                            "value": 1                                                                                // 192
                        }                                                                                             // 191
                    }                                                                                                 // 190
                }]                                                                                                    // 185
            }],                                                                                                       // 168
            "createdDate": "2017-02-14T16:07:09.033Z"                                                                 // 199
        }, {                                                                                                          // 138
            "id": "XTzu8HB3feep3HYKs",                                                                                // 202
            "viewportStructure": {                                                                                    // 203
                "type": "grid",                                                                                       // 204
                "properties": {                                                                                       // 205
                    "rows": 1,                                                                                        // 206
                    "columns": 2                                                                                      // 207
                },                                                                                                    // 205
                "layoutTemplateName": "gridLayout"                                                                    // 209
            },                                                                                                        // 203
            "viewports": [{                                                                                           // 211
                "viewportSettings": {},                                                                               // 213
                "imageMatchingRules": [],                                                                             // 214
                "seriesMatchingRules": [{                                                                             // 215
                    "id": "mXnsCcNzZL56z7mTZ",                                                                        // 217
                    "weight": 1,                                                                                      // 218
                    "required": false,                                                                                // 219
                    "attribute": "x0008103e",                                                                         // 220
                    "constraint": {                                                                                   // 221
                        "contains": {                                                                                 // 222
                            "value": "3.0"                                                                            // 223
                        }                                                                                             // 222
                    }                                                                                                 // 221
                }],                                                                                                   // 216
                "studyMatchingRules": []                                                                              // 228
            }, {                                                                                                      // 212
                "viewportSettings": {},                                                                               // 231
                "imageMatchingRules": [],                                                                             // 232
                "seriesMatchingRules": [{                                                                             // 233
                    "id": "ygz4nb28iJZcJhnYa",                                                                        // 235
                    "weight": 1,                                                                                      // 236
                    "required": false,                                                                                // 237
                    "attribute": "x0008103e",                                                                         // 238
                    "constraint": {                                                                                   // 239
                        "contains": {                                                                                 // 240
                            "value": "3.0"                                                                            // 241
                        }                                                                                             // 240
                    }                                                                                                 // 239
                }],                                                                                                   // 234
                "studyMatchingRules": [{                                                                              // 246
                    "id": "uDoEgLTvnXTByWnPz",                                                                        // 248
                    "weight": 1,                                                                                      // 249
                    "required": false,                                                                                // 250
                    "attribute": "abstractPriorValue",                                                                // 251
                    "constraint": {                                                                                   // 252
                        "equals": {                                                                                   // 253
                            "value": 1                                                                                // 254
                        }                                                                                             // 253
                    }                                                                                                 // 252
                }]                                                                                                    // 247
            }],                                                                                                       // 230
            "createdDate": "2017-02-14T16:07:12.085Z"                                                                 // 261
        }, {                                                                                                          // 201
            "id": "3yPYNaeFtr76Qz3jq",                                                                                // 264
            "viewportStructure": {                                                                                    // 265
                "type": "grid",                                                                                       // 266
                "properties": {                                                                                       // 267
                    "rows": 2,                                                                                        // 268
                    "columns": 2                                                                                      // 269
                },                                                                                                    // 267
                "layoutTemplateName": "gridLayout"                                                                    // 271
            },                                                                                                        // 265
            "viewports": [{                                                                                           // 273
                "viewportSettings": {},                                                                               // 275
                "imageMatchingRules": [],                                                                             // 276
                "seriesMatchingRules": [{                                                                             // 277
                    "id": "mXnsCcNzZL56z7mTZ",                                                                        // 279
                    "weight": 1,                                                                                      // 280
                    "required": false,                                                                                // 281
                    "attribute": "x0008103e",                                                                         // 282
                    "constraint": {                                                                                   // 283
                        "contains": {                                                                                 // 284
                            "value": "Body 3.0"                                                                       // 285
                        }                                                                                             // 284
                    }                                                                                                 // 283
                }],                                                                                                   // 278
                "studyMatchingRules": []                                                                              // 290
            }, {                                                                                                      // 274
                "viewportSettings": {                                                                                 // 293
                    "wlPreset": "Lung"                                                                                // 294
                },                                                                                                    // 293
                "imageMatchingRules": [],                                                                             // 296
                "seriesMatchingRules": [{                                                                             // 297
                    "id": "ygz4nb28iJZcJhnYa",                                                                        // 299
                    "weight": 1,                                                                                      // 300
                    "required": false,                                                                                // 301
                    "attribute": "x0008103e",                                                                         // 302
                    "constraint": {                                                                                   // 303
                        "contains": {                                                                                 // 304
                            "value": "Lung 3.0"                                                                       // 305
                        }                                                                                             // 304
                    }                                                                                                 // 303
                }],                                                                                                   // 298
                "studyMatchingRules": []                                                                              // 310
            }, {                                                                                                      // 292
                "viewportSettings": {},                                                                               // 313
                "imageMatchingRules": [],                                                                             // 314
                "seriesMatchingRules": [{                                                                             // 315
                    "id": "6vdBRZYnqmmosipph",                                                                        // 317
                    "weight": 1,                                                                                      // 318
                    "required": false,                                                                                // 319
                    "attribute": "x0008103e",                                                                         // 320
                    "constraint": {                                                                                   // 321
                        "contains": {                                                                                 // 322
                            "value": "Body 3.0"                                                                       // 323
                        }                                                                                             // 322
                    }                                                                                                 // 321
                }],                                                                                                   // 316
                "studyMatchingRules": [{                                                                              // 328
                    "id": "SxfTyhGcMhr56PtPM",                                                                        // 330
                    "weight": 1,                                                                                      // 331
                    "required": false,                                                                                // 332
                    "attribute": "abstractPriorValue",                                                                // 333
                    "constraint": {                                                                                   // 334
                        "equals": {                                                                                   // 335
                            "value": 1                                                                                // 336
                        }                                                                                             // 335
                    }                                                                                                 // 334
                }]                                                                                                    // 329
            }, {                                                                                                      // 312
                "viewportSettings": {                                                                                 // 343
                    "wlPreset": "Lung"                                                                                // 344
                },                                                                                                    // 343
                "imageMatchingRules": [],                                                                             // 346
                "seriesMatchingRules": [{                                                                             // 347
                    "id": "FTAyChZCPW68yJjXD",                                                                        // 349
                    "weight": 1,                                                                                      // 350
                    "required": false,                                                                                // 351
                    "attribute": "x0008103e",                                                                         // 352
                    "constraint": {                                                                                   // 353
                        "contains": {                                                                                 // 354
                            "value": "Lung 3.0"                                                                       // 355
                        }                                                                                             // 354
                    }                                                                                                 // 353
                }],                                                                                                   // 348
                "studyMatchingRules": [{                                                                              // 360
                    "id": "gMJjfrbsqYNbErPx5",                                                                        // 362
                    "weight": 1,                                                                                      // 363
                    "required": false,                                                                                // 364
                    "attribute": "abstractPriorValue",                                                                // 365
                    "constraint": {                                                                                   // 366
                        "equals": {                                                                                   // 367
                            "value": 1                                                                                // 368
                        }                                                                                             // 367
                    }                                                                                                 // 366
                }]                                                                                                    // 361
            }],                                                                                                       // 342
            "createdDate": "2017-02-14T16:11:40.489Z"                                                                 // 375
        }],                                                                                                           // 263
        "numberOfPriorsReferenced": 4                                                                                 // 378
    }); /**                                                                                                           // 116
         * Demo #2                                                                                                    //
         */                                                                                                           //
    HP.demoProtocols.push({                                                                                           // 385
        "id": "demoProtocol2",                                                                                        // 386
        "locked": false,                                                                                              // 387
        "name": "DFCI-CT-CHEST-COMPARE-2",                                                                            // 388
        "createdDate": "2017-02-14T16:07:09.033Z",                                                                    // 389
        "modifiedDate": "2017-02-14T16:18:43.930Z",                                                                   // 390
        "availableTo": {},                                                                                            // 391
        "editableBy": {},                                                                                             // 392
        "protocolMatchingRules": [{                                                                                   // 393
            "id": "7tmuq7KzDMCWFeapc",                                                                                // 394
            "weight": 2,                                                                                              // 395
            "required": false,                                                                                        // 396
            "attribute": "x00081030",                                                                                 // 397
            "constraint": {                                                                                           // 398
                "contains": {                                                                                         // 399
                    "value": "DFCI CT CHEST"                                                                          // 400
                }                                                                                                     // 399
            }                                                                                                         // 398
        }],                                                                                                           // 393
        "stages": [{                                                                                                  // 404
            "id": "v5PfGt9F6mffZPif5",                                                                                // 405
            "name": "oneByOne",                                                                                       // 406
            "viewportStructure": {                                                                                    // 407
                "type": "grid",                                                                                       // 408
                "properties": {                                                                                       // 409
                    "rows": 1,                                                                                        // 410
                    "columns": 2                                                                                      // 411
                },                                                                                                    // 409
                "layoutTemplateName": "gridLayout"                                                                    // 413
            },                                                                                                        // 407
            "viewports": [{                                                                                           // 415
                "viewportSettings": {},                                                                               // 416
                "imageMatchingRules": [],                                                                             // 417
                "seriesMatchingRules": [{                                                                             // 418
                    "id": "mXnsCcNzZL56z7mac",                                                                        // 419
                    "weight": 1,                                                                                      // 420
                    "required": false,                                                                                // 421
                    "attribute": "x0008103e",                                                                         // 422
                    "constraint": {                                                                                   // 423
                        "contains": {                                                                                 // 424
                            "value": "2.0"                                                                            // 425
                        }                                                                                             // 424
                    }                                                                                                 // 423
                }],                                                                                                   // 418
                "studyMatchingRules": []                                                                              // 429
            }, {                                                                                                      // 415
                "viewportSettings": {},                                                                               // 431
                "imageMatchingRules": [],                                                                             // 432
                "seriesMatchingRules": [{                                                                             // 433
                    "id": "ygz4nb28iJZcJhnYc",                                                                        // 434
                    "weight": 1,                                                                                      // 435
                    "required": false,                                                                                // 436
                    "attribute": "x0008103e",                                                                         // 437
                    "constraint": {                                                                                   // 438
                        "contains": {                                                                                 // 439
                            "value": "2.0"                                                                            // 440
                        }                                                                                             // 439
                    }                                                                                                 // 438
                }],                                                                                                   // 433
                "studyMatchingRules": [{                                                                              // 444
                    "id": "uDoEgLTvnXTByWnPt",                                                                        // 445
                    "weight": 1,                                                                                      // 446
                    "required": false,                                                                                // 447
                    "attribute": "abstractPriorValue",                                                                // 448
                    "constraint": {                                                                                   // 449
                        "equals": {                                                                                   // 450
                            "value": 1                                                                                // 451
                        }                                                                                             // 450
                    }                                                                                                 // 449
                }]                                                                                                    // 444
            }],                                                                                                       // 430
            "createdDate": "2017-02-14T16:07:09.033Z"                                                                 // 456
        }, {                                                                                                          // 404
            "id": "XTzu8HB3feep3HYKs",                                                                                // 458
            "viewportStructure": {                                                                                    // 459
                "type": "grid",                                                                                       // 460
                "properties": {                                                                                       // 461
                    "rows": 1,                                                                                        // 462
                    "columns": 2                                                                                      // 463
                },                                                                                                    // 461
                "layoutTemplateName": "gridLayout"                                                                    // 465
            },                                                                                                        // 459
            "viewports": [{                                                                                           // 467
                "viewportSettings": {},                                                                               // 468
                "imageMatchingRules": [],                                                                             // 469
                "seriesMatchingRules": [{                                                                             // 470
                    "id": "mXnsCcNzZL56z7mTZ",                                                                        // 471
                    "weight": 1,                                                                                      // 472
                    "required": false,                                                                                // 473
                    "attribute": "x0008103e",                                                                         // 474
                    "constraint": {                                                                                   // 475
                        "contains": {                                                                                 // 476
                            "value": "Body 3.0"                                                                       // 477
                        }                                                                                             // 476
                    }                                                                                                 // 475
                }, {                                                                                                  // 470
                    "id": "mYnsCcNwZL56z7mTZ",                                                                        // 481
                    "weight": 1,                                                                                      // 482
                    "required": false,                                                                                // 483
                    "attribute": "x0008103e",                                                                         // 484
                    "constraint": {                                                                                   // 485
                        "contains": {                                                                                 // 486
                            "value": "Body 5.0"                                                                       // 487
                        }                                                                                             // 486
                    }                                                                                                 // 485
                }],                                                                                                   // 480
                "studyMatchingRules": []                                                                              // 491
            }, {                                                                                                      // 467
                "viewportSettings": {},                                                                               // 493
                "imageMatchingRules": [],                                                                             // 494
                "seriesMatchingRules": [{                                                                             // 495
                    "id": "ygz4nb28iJZcJhnYa",                                                                        // 496
                    "weight": 1,                                                                                      // 497
                    "required": false,                                                                                // 498
                    "attribute": "x0008103e",                                                                         // 499
                    "constraint": {                                                                                   // 500
                        "contains": {                                                                                 // 501
                            "value": "Body 3.0"                                                                       // 502
                        }                                                                                             // 501
                    }                                                                                                 // 500
                }, {                                                                                                  // 495
                    "id": "ygz4nb29iJZcJhnYa",                                                                        // 506
                    "weight": 1,                                                                                      // 507
                    "required": false,                                                                                // 508
                    "attribute": "x0008103e",                                                                         // 509
                    "constraint": {                                                                                   // 510
                        "contains": {                                                                                 // 511
                            "value": "Body 5.0"                                                                       // 512
                        }                                                                                             // 511
                    }                                                                                                 // 510
                }],                                                                                                   // 505
                "studyMatchingRules": [{                                                                              // 516
                    "id": "uDoEgLTvnXTByWnPz",                                                                        // 517
                    "weight": 1,                                                                                      // 518
                    "required": false,                                                                                // 519
                    "attribute": "abstractPriorValue",                                                                // 520
                    "constraint": {                                                                                   // 521
                        "equals": {                                                                                   // 522
                            "value": 1                                                                                // 523
                        }                                                                                             // 522
                    }                                                                                                 // 521
                }]                                                                                                    // 516
            }],                                                                                                       // 492
            "createdDate": "2017-02-14T16:07:12.085Z"                                                                 // 528
        }, {                                                                                                          // 457
            "id": "3yPYNaeFtr76Qz3jq",                                                                                // 530
            "viewportStructure": {                                                                                    // 531
                "type": "grid",                                                                                       // 532
                "properties": {                                                                                       // 533
                    "rows": 2,                                                                                        // 534
                    "columns": 2                                                                                      // 535
                },                                                                                                    // 533
                "layoutTemplateName": "gridLayout"                                                                    // 537
            },                                                                                                        // 531
            "viewports": [{                                                                                           // 539
                "viewportSettings": {},                                                                               // 540
                "imageMatchingRules": [],                                                                             // 541
                "seriesMatchingRules": [{                                                                             // 542
                    "id": "mXnsCcNzZL56z7mtr",                                                                        // 543
                    "weight": 1,                                                                                      // 544
                    "required": false,                                                                                // 545
                    "attribute": "x0008103e",                                                                         // 546
                    "constraint": {                                                                                   // 547
                        "contains": {                                                                                 // 548
                            "value": "Body 3.0"                                                                       // 549
                        }                                                                                             // 548
                    }                                                                                                 // 547
                }, {                                                                                                  // 542
                    "id": "jXnsCcNzZL56z7mTZ",                                                                        // 553
                    "weight": 1,                                                                                      // 554
                    "required": false,                                                                                // 555
                    "attribute": "x0008103e",                                                                         // 556
                    "constraint": {                                                                                   // 557
                        "contains": {                                                                                 // 558
                            "value": "Body 5.0"                                                                       // 559
                        }                                                                                             // 558
                    }                                                                                                 // 557
                }],                                                                                                   // 552
                "studyMatchingRules": []                                                                              // 563
            }, {                                                                                                      // 539
                "viewportSettings": {                                                                                 // 565
                    "wlPreset": "Lung"                                                                                // 566
                },                                                                                                    // 565
                "imageMatchingRules": [],                                                                             // 568
                "seriesMatchingRules": [{                                                                             // 569
                    "id": "ygz4nb28iJZcJhnYb",                                                                        // 570
                    "weight": 2,                                                                                      // 571
                    "required": false,                                                                                // 572
                    "attribute": "x0008103e",                                                                         // 573
                    "constraint": {                                                                                   // 574
                        "contains": {                                                                                 // 575
                            "value": "Lung 3.0"                                                                       // 576
                        }                                                                                             // 575
                    }                                                                                                 // 574
                }, {                                                                                                  // 569
                    "id": "ycz4nb28iJZcJhnYa",                                                                        // 580
                    "weight": 1,                                                                                      // 581
                    "required": false,                                                                                // 582
                    "attribute": "x0008103e",                                                                         // 583
                    "constraint": {                                                                                   // 584
                        "contains": {                                                                                 // 585
                            "value": "Lung 5.0"                                                                       // 586
                        }                                                                                             // 585
                    }                                                                                                 // 584
                }],                                                                                                   // 579
                "studyMatchingRules": []                                                                              // 590
            }, {                                                                                                      // 564
                "viewportSettings": {},                                                                               // 592
                "imageMatchingRules": [],                                                                             // 593
                "seriesMatchingRules": [{                                                                             // 594
                    "id": "6vdBRZYnqmmosipph",                                                                        // 595
                    "weight": 2,                                                                                      // 596
                    "required": false,                                                                                // 597
                    "attribute": "x0008103e",                                                                         // 598
                    "constraint": {                                                                                   // 599
                        "contains": {                                                                                 // 600
                            "value": "Body 3.0"                                                                       // 601
                        }                                                                                             // 600
                    }                                                                                                 // 599
                }, {                                                                                                  // 594
                    "id": "6vdBRFYnqmmosipph",                                                                        // 605
                    "weight": 1,                                                                                      // 606
                    "required": false,                                                                                // 607
                    "attribute": "x0008103e",                                                                         // 608
                    "constraint": {                                                                                   // 609
                        "contains": {                                                                                 // 610
                            "value": "Body 5.0"                                                                       // 611
                        }                                                                                             // 610
                    }                                                                                                 // 609
                }],                                                                                                   // 604
                "studyMatchingRules": [{                                                                              // 615
                    "id": "SxfTyhGcMhr56PtPM",                                                                        // 616
                    "weight": 1,                                                                                      // 617
                    "required": false,                                                                                // 618
                    "attribute": "abstractPriorValue",                                                                // 619
                    "constraint": {                                                                                   // 620
                        "equals": {                                                                                   // 621
                            "value": 1                                                                                // 622
                        }                                                                                             // 621
                    }                                                                                                 // 620
                }]                                                                                                    // 615
            }, {                                                                                                      // 591
                "viewportSettings": {                                                                                 // 627
                    "wlPreset": "Lung"                                                                                // 628
                },                                                                                                    // 627
                "imageMatchingRules": [],                                                                             // 630
                "seriesMatchingRules": [{                                                                             // 631
                    "id": "FTAyChZCPW68yJjXD",                                                                        // 632
                    "weight": 2,                                                                                      // 633
                    "required": false,                                                                                // 634
                    "attribute": "x0008103e",                                                                         // 635
                    "constraint": {                                                                                   // 636
                        "contains": {                                                                                 // 637
                            "value": "Lung 3.0"                                                                       // 638
                        }                                                                                             // 637
                    }                                                                                                 // 636
                }, {                                                                                                  // 631
                    "id": "DTAyChZCPW68yJjXD",                                                                        // 642
                    "weight": 1,                                                                                      // 643
                    "required": false,                                                                                // 644
                    "attribute": "x0008103e",                                                                         // 645
                    "constraint": {                                                                                   // 646
                        "contains": {                                                                                 // 647
                            "value": "Lung 5.0"                                                                       // 648
                        }                                                                                             // 647
                    }                                                                                                 // 646
                }],                                                                                                   // 641
                "studyMatchingRules": [{                                                                              // 652
                    "id": "gMJjfrbsqYNbErPx5",                                                                        // 653
                    "weight": 1,                                                                                      // 654
                    "required": false,                                                                                // 655
                    "attribute": "abstractPriorValue",                                                                // 656
                    "constraint": {                                                                                   // 657
                        "equals": {                                                                                   // 658
                            "value": 1                                                                                // 659
                        }                                                                                             // 658
                    }                                                                                                 // 657
                }]                                                                                                    // 652
            }],                                                                                                       // 626
            "createdDate": "2017-02-14T16:11:40.489Z"                                                                 // 664
        }],                                                                                                           // 529
        "numberOfPriorsReferenced": 1                                                                                 // 666
    }); /**                                                                                                           // 385
         * Demo: screenCT                                                                                             //
         */                                                                                                           //
    HP.demoProtocols.push({                                                                                           // 673
        "id": "screenCT",                                                                                             // 674
        "locked": false,                                                                                              // 675
        "name": "DFCI-CT-CHEST-SCREEN",                                                                               // 676
        "createdDate": "2017-02-14T16:07:09.033Z",                                                                    // 677
        "modifiedDate": "2017-02-14T16:18:43.930Z",                                                                   // 678
        "availableTo": {},                                                                                            // 679
        "editableBy": {},                                                                                             // 680
        "protocolMatchingRules": [{                                                                                   // 681
            "id": "7tmuq7KzDMCWFeapc",                                                                                // 682
            "weight": 2,                                                                                              // 683
            "required": false,                                                                                        // 684
            "attribute": "x00081030",                                                                                 // 685
            "constraint": {                                                                                           // 686
                "contains": {                                                                                         // 687
                    "value": "DFCI CT CHEST"                                                                          // 688
                }                                                                                                     // 687
            }                                                                                                         // 686
        }],                                                                                                           // 681
        "stages": [{                                                                                                  // 692
            "id": "v5PfGt9F6mffZPif5",                                                                                // 693
            "name": "oneByOne",                                                                                       // 694
            "viewportStructure": {                                                                                    // 695
                "type": "grid",                                                                                       // 696
                "properties": {                                                                                       // 697
                    "rows": 1,                                                                                        // 698
                    "columns": 1                                                                                      // 699
                },                                                                                                    // 697
                "layoutTemplateName": "gridLayout"                                                                    // 701
            },                                                                                                        // 695
            "viewports": [{                                                                                           // 703
                "viewportSettings": {},                                                                               // 704
                "imageMatchingRules": [],                                                                             // 705
                "seriesMatchingRules": [{                                                                             // 706
                    "id": "mXnsCcNzZL55z7mTZ",                                                                        // 707
                    "weight": 1,                                                                                      // 708
                    "required": false,                                                                                // 709
                    "attribute": "x0008103e",                                                                         // 710
                    "constraint": {                                                                                   // 711
                        "contains": {                                                                                 // 712
                            "value": "2.0"                                                                            // 713
                        }                                                                                             // 712
                    }                                                                                                 // 711
                }],                                                                                                   // 706
                "studyMatchingRules": []                                                                              // 717
            }],                                                                                                       // 703
            "createdDate": "2017-02-14T16:07:09.033Z"                                                                 // 719
        }, {                                                                                                          // 692
            "id": "v5PfGt9F4mffZPif5",                                                                                // 722
            "name": "oneByOne",                                                                                       // 723
            "viewportStructure": {                                                                                    // 724
                "type": "grid",                                                                                       // 725
                "properties": {                                                                                       // 726
                    "rows": 2,                                                                                        // 727
                    "columns": 2                                                                                      // 728
                },                                                                                                    // 726
                "layoutTemplateName": "gridLayout"                                                                    // 730
            },                                                                                                        // 724
            "viewports": [{                                                                                           // 732
                "viewportSettings": {},                                                                               // 733
                "imageMatchingRules": [],                                                                             // 734
                "seriesMatchingRules": [{                                                                             // 735
                    "id": "mXnsCcNzZL56z7nTZ",                                                                        // 736
                    "weight": 1,                                                                                      // 737
                    "required": false,                                                                                // 738
                    "attribute": "x0008103e",                                                                         // 739
                    "constraint": {                                                                                   // 740
                        "contains": {                                                                                 // 741
                            "value": "Body 5.0"                                                                       // 742
                        }                                                                                             // 741
                    }                                                                                                 // 740
                }, {                                                                                                  // 735
                    "id": "mXnsCcNzZL56z7rTZ",                                                                        // 746
                    "weight": 1,                                                                                      // 747
                    "required": false,                                                                                // 748
                    "attribute": "x0008103e",                                                                         // 749
                    "constraint": {                                                                                   // 750
                        "contains": {                                                                                 // 751
                            "value": "Body 3.0"                                                                       // 752
                        }                                                                                             // 751
                    }                                                                                                 // 750
                }],                                                                                                   // 745
                "studyMatchingRules": []                                                                              // 756
            }, {                                                                                                      // 732
                "viewportSettings": {},                                                                               // 758
                "imageMatchingRules": [],                                                                             // 759
                "seriesMatchingRules": [{                                                                             // 760
                    "id": "mXnsCcNzZL56r7mTZ",                                                                        // 761
                    "weight": 1,                                                                                      // 762
                    "required": false,                                                                                // 763
                    "attribute": "x0008103e",                                                                         // 764
                    "constraint": {                                                                                   // 765
                        "contains": {                                                                                 // 766
                            "value": "Lung 5.0"                                                                       // 767
                        }                                                                                             // 766
                    }                                                                                                 // 765
                }, {                                                                                                  // 760
                    "id": "mXnsCcNzZL56a7mTZ",                                                                        // 771
                    "weight": 1,                                                                                      // 772
                    "required": false,                                                                                // 773
                    "attribute": "x0008103e",                                                                         // 774
                    "constraint": {                                                                                   // 775
                        "contains": {                                                                                 // 776
                            "value": "Lung 3.0"                                                                       // 777
                        }                                                                                             // 776
                    }                                                                                                 // 775
                }],                                                                                                   // 770
                "studyMatchingRules": []                                                                              // 781
            }, {                                                                                                      // 757
                "viewportSettings": {},                                                                               // 783
                "imageMatchingRules": [],                                                                             // 784
                "seriesMatchingRules": [{                                                                             // 785
                    "id": "mXnsCcRzZL56z7mTZ",                                                                        // 786
                    "weight": 1,                                                                                      // 787
                    "required": false,                                                                                // 788
                    "attribute": "x0008103e",                                                                         // 789
                    "constraint": {                                                                                   // 790
                        "contains": {                                                                                 // 791
                            "value": "Body 4.0"                                                                       // 792
                        }                                                                                             // 791
                    }                                                                                                 // 790
                }, {                                                                                                  // 785
                    "id": "mXnsCcNzTL56z7mTZ",                                                                        // 796
                    "weight": 1,                                                                                      // 797
                    "required": false,                                                                                // 798
                    "attribute": "x0008103e",                                                                         // 799
                    "constraint": {                                                                                   // 800
                        "contains": {                                                                                 // 801
                            "value": "Coronal"                                                                        // 802
                        }                                                                                             // 801
                    }                                                                                                 // 800
                }],                                                                                                   // 795
                "studyMatchingRules": []                                                                              // 806
            }, {                                                                                                      // 782
                "viewportSettings": {},                                                                               // 808
                "imageMatchingRules": [],                                                                             // 809
                "seriesMatchingRules": [{                                                                             // 810
                    "id": "mXnsCcMzZL56z7mTZ",                                                                        // 811
                    "weight": 1,                                                                                      // 812
                    "required": false,                                                                                // 813
                    "attribute": "x0008103e",                                                                         // 814
                    "constraint": {                                                                                   // 815
                        "contains": {                                                                                 // 816
                            "value": "Body 4.0"                                                                       // 817
                        }                                                                                             // 816
                    }                                                                                                 // 815
                }, {                                                                                                  // 810
                    "id": "mXnsCcAzZL56z7mTZ",                                                                        // 821
                    "weight": 1,                                                                                      // 822
                    "required": false,                                                                                // 823
                    "attribute": "x0008103e",                                                                         // 824
                    "constraint": {                                                                                   // 825
                        "contains": {                                                                                 // 826
                            "value": "Sagittal"                                                                       // 827
                        }                                                                                             // 826
                    }                                                                                                 // 825
                }],                                                                                                   // 820
                "studyMatchingRules": []                                                                              // 831
            }],                                                                                                       // 807
            "createdDate": "2017-02-14T16:07:09.033Z"                                                                 // 833
        }],                                                                                                           // 721
        "numberOfPriorsReferenced": 0                                                                                 // 835
    }); /**                                                                                                           // 673
         * Demo: PETCTSCREEN                                                                                          //
         */                                                                                                           //
    HP.demoProtocols.push({                                                                                           // 842
        "id": "PETCTSCREEN",                                                                                          // 843
        "locked": false,                                                                                              // 844
        "name": "PETCT-SCREEN",                                                                                       // 845
        "createdDate": "2017-02-14T16:07:09.033Z",                                                                    // 846
        "modifiedDate": "2017-02-14T16:18:43.930Z",                                                                   // 847
        "availableTo": {},                                                                                            // 848
        "editableBy": {},                                                                                             // 849
        "protocolMatchingRules": [{                                                                                   // 850
            "id": "7tmuqgKzDMCWFeapc",                                                                                // 851
            "weight": 5,                                                                                              // 852
            "required": false,                                                                                        // 853
            "attribute": "x00081030",                                                                                 // 854
            "constraint": {                                                                                           // 855
                "contains": {                                                                                         // 856
                    "value": "PETCT"                                                                                  // 857
                }                                                                                                     // 856
            }                                                                                                         // 855
        }],                                                                                                           // 850
        "stages": [{                                                                                                  // 861
            "id": "v5PfGt9F6mFgZPif5",                                                                                // 862
            "name": "oneByOne",                                                                                       // 863
            "viewportStructure": {                                                                                    // 864
                "type": "grid",                                                                                       // 865
                "properties": {                                                                                       // 866
                    "rows": 1,                                                                                        // 867
                    "columns": 2                                                                                      // 868
                },                                                                                                    // 866
                "layoutTemplateName": "gridLayout"                                                                    // 870
            },                                                                                                        // 864
            "viewports": [{                                                                                           // 872
                "viewportSettings": {},                                                                               // 873
                "imageMatchingRules": [],                                                                             // 874
                "seriesMatchingRules": [{                                                                             // 875
                    "id": "mXnsCcAzZL56z7mTZ",                                                                        // 876
                    "weight": 1,                                                                                      // 877
                    "required": false,                                                                                // 878
                    "attribute": "x0008103e",                                                                         // 879
                    "constraint": {                                                                                   // 880
                        "contains": {                                                                                 // 881
                            "value": "Topogram"                                                                       // 882
                        }                                                                                             // 881
                    }                                                                                                 // 880
                }],                                                                                                   // 875
                "studyMatchingRules": []                                                                              // 886
            }, {                                                                                                      // 872
                "viewportSettings": {},                                                                               // 888
                "imageMatchingRules": [],                                                                             // 889
                "seriesMatchingRules": [{                                                                             // 890
                    "id": "mXnsCcNzZR56z7mTZ",                                                                        // 891
                    "weight": 1,                                                                                      // 892
                    "required": false,                                                                                // 893
                    "attribute": "x0008103e",                                                                         // 894
                    "constraint": {                                                                                   // 895
                        "contains": {                                                                                 // 896
                            "value": "Topogram"                                                                       // 897
                        }                                                                                             // 896
                    }                                                                                                 // 895
                }, {                                                                                                  // 890
                    "id": "mRnsCcNzZL56z7mTZ",                                                                        // 901
                    "weight": 1,                                                                                      // 902
                    "required": false,                                                                                // 903
                    "attribute": "x00200011",                                                                         // 904
                    "constraint": {                                                                                   // 905
                        "numericality": {                                                                             // 906
                            "greaterThanOrEqualTo": 2                                                                 // 907
                        }                                                                                             // 906
                    }                                                                                                 // 905
                }],                                                                                                   // 900
                "studyMatchingRules": []                                                                              // 911
            }],                                                                                                       // 887
            "createdDate": "2017-02-14T16:07:09.033Z"                                                                 // 913
        }, {                                                                                                          // 861
            "id": "v5PfGt9F6mFgZPif5",                                                                                // 915
            "name": "oneByOne",                                                                                       // 916
            "viewportStructure": {                                                                                    // 917
                "type": "grid",                                                                                       // 918
                "properties": {                                                                                       // 919
                    "rows": 1,                                                                                        // 920
                    "columns": 2                                                                                      // 921
                },                                                                                                    // 919
                "layoutTemplateName": "gridLayout"                                                                    // 923
            },                                                                                                        // 917
            "viewports": [{                                                                                           // 925
                "viewportSettings": {},                                                                               // 926
                "imageMatchingRules": [],                                                                             // 927
                "seriesMatchingRules": [{                                                                             // 928
                    "id": "mXnsGcNzZL56z7mTZ",                                                                        // 929
                    "weight": 1,                                                                                      // 930
                    "required": false,                                                                                // 931
                    "attribute": "x0008103e",                                                                         // 932
                    "constraint": {                                                                                   // 933
                        "contains": {                                                                                 // 934
                            "value": "PET WB Corrected"                                                               // 935
                        }                                                                                             // 934
                    }                                                                                                 // 933
                }],                                                                                                   // 928
                "studyMatchingRules": []                                                                              // 939
            }, {                                                                                                      // 925
                "viewportSettings": {},                                                                               // 941
                "imageMatchingRules": [],                                                                             // 942
                "seriesMatchingRules": [{                                                                             // 943
                    "id": "mXnsHcNzZL56z7mTZ",                                                                        // 944
                    "weight": 1,                                                                                      // 945
                    "required": false,                                                                                // 946
                    "attribute": "x0008103e",                                                                         // 947
                    "constraint": {                                                                                   // 948
                        "contains": {                                                                                 // 949
                            "value": "CT WB"                                                                          // 950
                        }                                                                                             // 949
                    }                                                                                                 // 948
                }],                                                                                                   // 943
                "studyMatchingRules": []                                                                              // 954
            }],                                                                                                       // 940
            "createdDate": "2017-02-14T16:07:09.033Z"                                                                 // 956
        }, {                                                                                                          // 914
            "id": "v5PfGt9F6mFgZPif5",                                                                                // 958
            "name": "oneByOne",                                                                                       // 959
            "viewportStructure": {                                                                                    // 960
                "type": "grid",                                                                                       // 961
                "properties": {                                                                                       // 962
                    "rows": 1,                                                                                        // 963
                    "columns": 2                                                                                      // 964
                },                                                                                                    // 962
                "layoutTemplateName": "gridLayout"                                                                    // 966
            },                                                                                                        // 960
            "viewports": [{                                                                                           // 968
                "viewportSettings": {                                                                                 // 969
                    "invert": "YES"                                                                                   // 970
                },                                                                                                    // 969
                "imageMatchingRules": [],                                                                             // 972
                "seriesMatchingRules": [{                                                                             // 973
                    "id": "mXneCcNzZL56z7mTZ",                                                                        // 974
                    "weight": 1,                                                                                      // 975
                    "required": false,                                                                                // 976
                    "attribute": "x0008103e",                                                                         // 977
                    "constraint": {                                                                                   // 978
                        "contains": {                                                                                 // 979
                            "value": "PET WB Uncorrected"                                                             // 980
                        }                                                                                             // 979
                    }                                                                                                 // 978
                }],                                                                                                   // 973
                "studyMatchingRules": []                                                                              // 984
            }, {                                                                                                      // 968
                "viewportSettings": {},                                                                               // 986
                "imageMatchingRules": [],                                                                             // 987
                "seriesMatchingRules": [{                                                                             // 988
                    "id": "mXnsCuNzZL56z7mTZ",                                                                        // 989
                    "weight": 1,                                                                                      // 990
                    "required": false,                                                                                // 991
                    "attribute": "x0008103e",                                                                         // 992
                    "constraint": {                                                                                   // 993
                        "contains": {                                                                                 // 994
                            "value": "CT Nk"                                                                          // 995
                        }                                                                                             // 994
                    }                                                                                                 // 993
                }],                                                                                                   // 988
                "studyMatchingRules": []                                                                              // 999
            }],                                                                                                       // 985
            "createdDate": "2017-02-14T16:07:09.033Z"                                                                 // 1001
        }],                                                                                                           // 957
        "numberOfPriorsReferenced": 0                                                                                 // 1003
    }); /**                                                                                                           // 842
         * Demo: PETCTCOMPARE                                                                                         //
         */                                                                                                           //
    HP.demoProtocols.push({                                                                                           // 1010
        "id": "PETCTCOMPARE",                                                                                         // 1011
        "locked": false,                                                                                              // 1012
        "name": "PETCT-COMPARE",                                                                                      // 1013
        "createdDate": "2017-02-14T16:07:09.033Z",                                                                    // 1014
        "modifiedDate": "2017-02-14T16:18:43.930Z",                                                                   // 1015
        "availableTo": {},                                                                                            // 1016
        "editableBy": {},                                                                                             // 1017
        "protocolMatchingRules": [{                                                                                   // 1018
            "id": "7tmuqgKzDMCWFeapc",                                                                                // 1019
            "weight": 5,                                                                                              // 1020
            "required": false,                                                                                        // 1021
            "attribute": "x00081030",                                                                                 // 1022
            "constraint": {                                                                                           // 1023
                "contains": {                                                                                         // 1024
                    "value": "PETCT"                                                                                  // 1025
                }                                                                                                     // 1024
            }                                                                                                         // 1023
        }],                                                                                                           // 1018
        "stages": [{                                                                                                  // 1029
            "id": "v5PfGt9F6mFgZPif5",                                                                                // 1030
            "name": "oneByOne",                                                                                       // 1031
            "viewportStructure": {                                                                                    // 1032
                "type": "grid",                                                                                       // 1033
                "properties": {                                                                                       // 1034
                    "rows": 1,                                                                                        // 1035
                    "columns": 2                                                                                      // 1036
                },                                                                                                    // 1034
                "layoutTemplateName": "gridLayout"                                                                    // 1038
            },                                                                                                        // 1032
            "viewports": [{                                                                                           // 1040
                "viewportSettings": {},                                                                               // 1041
                "imageMatchingRules": [],                                                                             // 1042
                "seriesMatchingRules": [{                                                                             // 1043
                    "id": "mXnsCcNzZL59z7mTZ",                                                                        // 1044
                    "weight": 1,                                                                                      // 1045
                    "required": false,                                                                                // 1046
                    "attribute": "x0008103e",                                                                         // 1047
                    "constraint": {                                                                                   // 1048
                        "contains": {                                                                                 // 1049
                            "value": "Topogram"                                                                       // 1050
                        }                                                                                             // 1049
                    }                                                                                                 // 1048
                }],                                                                                                   // 1043
                "studyMatchingRules": []                                                                              // 1054
            }, {                                                                                                      // 1040
                "viewportSettings": {},                                                                               // 1056
                "imageMatchingRules": [],                                                                             // 1057
                "seriesMatchingRules": [{                                                                             // 1058
                    "id": "mXnsCcNzZL56z7lTZ",                                                                        // 1059
                    "weight": 1,                                                                                      // 1060
                    "required": false,                                                                                // 1061
                    "attribute": "x0008103e",                                                                         // 1062
                    "constraint": {                                                                                   // 1063
                        "contains": {                                                                                 // 1064
                            "value": "Topogram"                                                                       // 1065
                        }                                                                                             // 1064
                    }                                                                                                 // 1063
                }],                                                                                                   // 1058
                "studyMatchingRules": [{                                                                              // 1069
                    "id": "uDoEgLTbnXTByWnPz",                                                                        // 1070
                    "weight": 1,                                                                                      // 1071
                    "required": false,                                                                                // 1072
                    "attribute": "abstractPriorValue",                                                                // 1073
                    "constraint": {                                                                                   // 1074
                        "equals": {                                                                                   // 1075
                            "value": 1                                                                                // 1076
                        }                                                                                             // 1075
                    }                                                                                                 // 1074
                }]                                                                                                    // 1069
            }],                                                                                                       // 1055
            "createdDate": "2017-02-14T16:07:09.033Z"                                                                 // 1081
        }, {                                                                                                          // 1029
            "id": "v5PfGt9F6mFgZPif5",                                                                                // 1083
            "name": "oneByOne",                                                                                       // 1084
            "viewportStructure": {                                                                                    // 1085
                "type": "grid",                                                                                       // 1086
                "properties": {                                                                                       // 1087
                    "rows": 1,                                                                                        // 1088
                    "columns": 2                                                                                      // 1089
                },                                                                                                    // 1087
                "layoutTemplateName": "gridLayout"                                                                    // 1091
            },                                                                                                        // 1085
            "viewports": [{                                                                                           // 1093
                "viewportSettings": {},                                                                               // 1094
                "imageMatchingRules": [],                                                                             // 1095
                "seriesMatchingRules": [{                                                                             // 1096
                    "id": "mXnsCcNjZL56z7mTZ",                                                                        // 1097
                    "weight": 1,                                                                                      // 1098
                    "required": false,                                                                                // 1099
                    "attribute": "x0008103e",                                                                         // 1100
                    "constraint": {                                                                                   // 1101
                        "contains": {                                                                                 // 1102
                            "value": "Topogram"                                                                       // 1103
                        }                                                                                             // 1102
                    }                                                                                                 // 1101
                }, {                                                                                                  // 1096
                    "id": "mXnsCcNzZL56z7gTZ",                                                                        // 1107
                    "weight": 1,                                                                                      // 1108
                    "required": false,                                                                                // 1109
                    "attribute": "x00200011",                                                                         // 1110
                    "constraint": {                                                                                   // 1111
                        "numericality": {                                                                             // 1112
                            "greaterThanOrEqualTo": 2                                                                 // 1113
                        }                                                                                             // 1112
                    }                                                                                                 // 1111
                }],                                                                                                   // 1106
                "studyMatchingRules": []                                                                              // 1117
            }, {                                                                                                      // 1093
                "viewportSettings": {},                                                                               // 1119
                "imageMatchingRules": [],                                                                             // 1120
                "seriesMatchingRules": [{                                                                             // 1121
                    "id": "mXnsCcCzZL56z7mTZ",                                                                        // 1122
                    "weight": 1,                                                                                      // 1123
                    "required": false,                                                                                // 1124
                    "attribute": "x0008103e",                                                                         // 1125
                    "constraint": {                                                                                   // 1126
                        "contains": {                                                                                 // 1127
                            "value": "Topogram"                                                                       // 1128
                        }                                                                                             // 1127
                    }                                                                                                 // 1126
                }, {                                                                                                  // 1121
                    "id": "mXnsCcNzZL56z7mTZ",                                                                        // 1132
                    "weight": 1,                                                                                      // 1133
                    "required": false,                                                                                // 1134
                    "attribute": "x00200011",                                                                         // 1135
                    "constraint": {                                                                                   // 1136
                        "numericality": {                                                                             // 1137
                            "greaterThanOrEqualTo": 2                                                                 // 1138
                        }                                                                                             // 1137
                    }                                                                                                 // 1136
                }],                                                                                                   // 1131
                "studyMatchingRules": [{                                                                              // 1142
                    "id": "uDoEgLTvn1TByWnPz",                                                                        // 1143
                    "weight": 1,                                                                                      // 1144
                    "required": false,                                                                                // 1145
                    "attribute": "abstractPriorValue",                                                                // 1146
                    "constraint": {                                                                                   // 1147
                        "equals": {                                                                                   // 1148
                            "value": 1                                                                                // 1149
                        }                                                                                             // 1148
                    }                                                                                                 // 1147
                }]                                                                                                    // 1142
            }],                                                                                                       // 1118
            "createdDate": "2017-02-14T16:07:09.033Z"                                                                 // 1154
        }, {                                                                                                          // 1082
            "id": "v5PfGt9F6mFgZPif5",                                                                                // 1156
            "name": "oneByOne",                                                                                       // 1157
            "viewportStructure": {                                                                                    // 1158
                "type": "grid",                                                                                       // 1159
                "properties": {                                                                                       // 1160
                    "rows": 2,                                                                                        // 1161
                    "columns": 2                                                                                      // 1162
                },                                                                                                    // 1160
                "layoutTemplateName": "gridLayout"                                                                    // 1164
            },                                                                                                        // 1158
            "viewports": [{                                                                                           // 1166
                "viewportSettings": {},                                                                               // 1167
                "imageMatchingRules": [],                                                                             // 1168
                "seriesMatchingRules": [{                                                                             // 1169
                    "id": "mXnsCcNzZL26z7mTZ",                                                                        // 1170
                    "weight": 1,                                                                                      // 1171
                    "required": false,                                                                                // 1172
                    "attribute": "x0008103e",                                                                         // 1173
                    "constraint": {                                                                                   // 1174
                        "contains": {                                                                                 // 1175
                            "value": "PET WB Corrected"                                                               // 1176
                        }                                                                                             // 1175
                    }                                                                                                 // 1174
                }],                                                                                                   // 1169
                "studyMatchingRules": []                                                                              // 1180
            }, {                                                                                                      // 1166
                "viewportSettings": {},                                                                               // 1182
                "imageMatchingRules": [],                                                                             // 1183
                "seriesMatchingRules": [{                                                                             // 1184
                    "id": "mXnsCcNzZL46z7mTZ",                                                                        // 1185
                    "weight": 1,                                                                                      // 1186
                    "required": false,                                                                                // 1187
                    "attribute": "x0008103e",                                                                         // 1188
                    "constraint": {                                                                                   // 1189
                        "contains": {                                                                                 // 1190
                            "value": "CT WB"                                                                          // 1191
                        }                                                                                             // 1190
                    }                                                                                                 // 1189
                }],                                                                                                   // 1184
                "studyMatchingRules": []                                                                              // 1195
            }, {                                                                                                      // 1181
                "viewportSettings": {},                                                                               // 1197
                "imageMatchingRules": [],                                                                             // 1198
                "seriesMatchingRules": [{                                                                             // 1199
                    "id": "mXnsCcNzZL57z7mTZ",                                                                        // 1200
                    "weight": 1,                                                                                      // 1201
                    "required": false,                                                                                // 1202
                    "attribute": "x0008103e",                                                                         // 1203
                    "constraint": {                                                                                   // 1204
                        "contains": {                                                                                 // 1205
                            "value": "PET WB Corrected"                                                               // 1206
                        }                                                                                             // 1205
                    }                                                                                                 // 1204
                }],                                                                                                   // 1199
                "studyMatchingRules": [{                                                                              // 1210
                    "id": "uDoEgLTvnYTByWnPz",                                                                        // 1211
                    "weight": 1,                                                                                      // 1212
                    "required": false,                                                                                // 1213
                    "attribute": "abstractPriorValue",                                                                // 1214
                    "constraint": {                                                                                   // 1215
                        "equals": {                                                                                   // 1216
                            "value": 1                                                                                // 1217
                        }                                                                                             // 1216
                    }                                                                                                 // 1215
                }]                                                                                                    // 1210
            }, {                                                                                                      // 1196
                "viewportSettings": {},                                                                               // 1222
                "imageMatchingRules": [],                                                                             // 1223
                "seriesMatchingRules": [{                                                                             // 1224
                    "id": "mXnsCcNzZQ56z7mTZ",                                                                        // 1225
                    "weight": 1,                                                                                      // 1226
                    "required": false,                                                                                // 1227
                    "attribute": "x0008103e",                                                                         // 1228
                    "constraint": {                                                                                   // 1229
                        "contains": {                                                                                 // 1230
                            "value": "CT WB"                                                                          // 1231
                        }                                                                                             // 1230
                    }                                                                                                 // 1229
                }],                                                                                                   // 1224
                "studyMatchingRules": [{                                                                              // 1235
                    "id": "uDoEgLTvnKTByWnPz",                                                                        // 1236
                    "weight": 1,                                                                                      // 1237
                    "required": false,                                                                                // 1238
                    "attribute": "abstractPriorValue",                                                                // 1239
                    "constraint": {                                                                                   // 1240
                        "equals": {                                                                                   // 1241
                            "value": 1                                                                                // 1242
                        }                                                                                             // 1241
                    }                                                                                                 // 1240
                }]                                                                                                    // 1235
            }],                                                                                                       // 1221
            "createdDate": "2017-02-14T16:07:09.033Z"                                                                 // 1247
        }, {                                                                                                          // 1155
            "id": "v5PfGt9F6mFgZPif5",                                                                                // 1249
            "name": "oneByOne",                                                                                       // 1250
            "viewportStructure": {                                                                                    // 1251
                "type": "grid",                                                                                       // 1252
                "properties": {                                                                                       // 1253
                    "rows": 2,                                                                                        // 1254
                    "columns": 2                                                                                      // 1255
                },                                                                                                    // 1253
                "layoutTemplateName": "gridLayout"                                                                    // 1257
            },                                                                                                        // 1251
            "viewports": [{                                                                                           // 1259
                "viewportSettings": {                                                                                 // 1260
                    "invert": "YES"                                                                                   // 1261
                },                                                                                                    // 1260
                "imageMatchingRules": [],                                                                             // 1263
                "seriesMatchingRules": [{                                                                             // 1264
                    "id": "mXnsCcNzZL56z7nTZ",                                                                        // 1265
                    "weight": 1,                                                                                      // 1266
                    "required": false,                                                                                // 1267
                    "attribute": "x0008103e",                                                                         // 1268
                    "constraint": {                                                                                   // 1269
                        "contains": {                                                                                 // 1270
                            "value": "PET WB Uncorrected"                                                             // 1271
                        }                                                                                             // 1270
                    }                                                                                                 // 1269
                }],                                                                                                   // 1264
                "studyMatchingRules": []                                                                              // 1275
            }, {                                                                                                      // 1259
                "viewportSettings": {},                                                                               // 1277
                "imageMatchingRules": [],                                                                             // 1278
                "seriesMatchingRules": [{                                                                             // 1279
                    "id": "mXnsCcNxZL56z7mTZ",                                                                        // 1280
                    "weight": 1,                                                                                      // 1281
                    "required": false,                                                                                // 1282
                    "attribute": "x0008103e",                                                                         // 1283
                    "constraint": {                                                                                   // 1284
                        "contains": {                                                                                 // 1285
                            "value": "CT Nk"                                                                          // 1286
                        }                                                                                             // 1285
                    }                                                                                                 // 1284
                }],                                                                                                   // 1279
                "studyMatchingRules": []                                                                              // 1290
            }, {                                                                                                      // 1276
                "viewportSettings": {                                                                                 // 1292
                    "invert": "YES"                                                                                   // 1293
                },                                                                                                    // 1292
                "imageMatchingRules": [],                                                                             // 1295
                "seriesMatchingRules": [{                                                                             // 1296
                    "id": "mXnsCcNzZA56z7mTZ",                                                                        // 1297
                    "weight": 1,                                                                                      // 1298
                    "required": false,                                                                                // 1299
                    "attribute": "x0008103e",                                                                         // 1300
                    "constraint": {                                                                                   // 1301
                        "contains": {                                                                                 // 1302
                            "value": "PET WB Uncorrected"                                                             // 1303
                        }                                                                                             // 1302
                    }                                                                                                 // 1301
                }],                                                                                                   // 1296
                "studyMatchingRules": [{                                                                              // 1307
                    "id": "uDoEgHTvnXTByWnPz",                                                                        // 1308
                    "weight": 1,                                                                                      // 1309
                    "required": false,                                                                                // 1310
                    "attribute": "abstractPriorValue",                                                                // 1311
                    "constraint": {                                                                                   // 1312
                        "equals": {                                                                                   // 1313
                            "value": 1                                                                                // 1314
                        }                                                                                             // 1313
                    }                                                                                                 // 1312
                }]                                                                                                    // 1307
            }, {                                                                                                      // 1291
                "viewportSettings": {},                                                                               // 1319
                "imageMatchingRules": [],                                                                             // 1320
                "seriesMatchingRules": [{                                                                             // 1321
                    "id": "mXnsCcNzZP56z7mTZ",                                                                        // 1322
                    "weight": 1,                                                                                      // 1323
                    "required": false,                                                                                // 1324
                    "attribute": "x0008103e",                                                                         // 1325
                    "constraint": {                                                                                   // 1326
                        "contains": {                                                                                 // 1327
                            "value": "CT Nk"                                                                          // 1328
                        }                                                                                             // 1327
                    }                                                                                                 // 1326
                }],                                                                                                   // 1321
                "studyMatchingRules": [{                                                                              // 1332
                    "id": "uDoEgITvnXTByWnPz",                                                                        // 1333
                    "weight": 1,                                                                                      // 1334
                    "required": false,                                                                                // 1335
                    "attribute": "abstractPriorValue",                                                                // 1336
                    "constraint": {                                                                                   // 1337
                        "equals": {                                                                                   // 1338
                            "value": 1                                                                                // 1339
                        }                                                                                             // 1338
                    }                                                                                                 // 1337
                }]                                                                                                    // 1332
            }],                                                                                                       // 1318
            "createdDate": "2017-02-14T16:07:09.033Z"                                                                 // 1344
        }],                                                                                                           // 1248
        "numberOfPriorsReferenced": 1                                                                                 // 1346
    });                                                                                                               // 1010
}                                                                                                                     // 1349
                                                                                                                      //
getDefaultProtocol(); //getMRTwoByTwoTest();                                                                          // 1351
//getDemoProtocols();                                                                                                 // 1353
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"classes":{"Protocol.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/classes/Protocol.js                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var Meteor = void 0;                                                                                                  // 1
module.watch(require("meteor/meteor"), {                                                                              // 1
    Meteor: function (v) {                                                                                            // 1
        Meteor = v;                                                                                                   // 1
    }                                                                                                                 // 1
}, 0);                                                                                                                // 1
var Random = void 0;                                                                                                  // 1
module.watch(require("meteor/random"), {                                                                              // 1
    Random: function (v) {                                                                                            // 1
        Random = v;                                                                                                   // 1
    }                                                                                                                 // 1
}, 1);                                                                                                                // 1
var removeFromArray = void 0;                                                                                         // 1
module.watch(require("../lib/removeFromArray"), {                                                                     // 1
    removeFromArray: function (v) {                                                                                   // 1
        removeFromArray = v;                                                                                          // 1
    }                                                                                                                 // 1
}, 2);                                                                                                                // 1
                                                                                                                      //
/**                                                                                                                   // 7
 * This class represents a Hanging Protocol at the highest level                                                      //
 *                                                                                                                    //
 * @type {Protocol}                                                                                                   //
 */HP.Protocol = function () {                                                                                        //
    /**                                                                                                               // 13
     * The Constructor for the Class to create a Protocol with the bare                                               //
     * minimum information                                                                                            //
     *                                                                                                                //
     * @param name The desired name for the Protocol                                                                  //
     */function Protocol(name) {                                                                                      //
        (0, _classCallCheck3.default)(this, Protocol);                                                                // 19
        // Create a new UUID for this Protocol                                                                        // 20
        this.id = Random.id(); // Store a value which determines whether or not a Protocol is locked                  // 21
        // This is probably temporary, since we will eventually have role / user                                      // 24
        // checks for editing. For now we just need it to prevent changes to the                                      // 25
        // default protocols.                                                                                         // 26
                                                                                                                      //
        this.locked = false; // Boolean value to indicate if the protocol has updated priors information              // 27
        // it's set in "updateNumberOfPriorsReferenced" function                                                      // 30
                                                                                                                      //
        this.hasUpdatedPriorsInformation = false; // Apply the desired name                                           // 31
                                                                                                                      //
        this.name = name; // Set the created and modified dates to Now                                                // 34
                                                                                                                      //
        this.createdDate = new Date();                                                                                // 37
        this.modifiedDate = new Date(); // If we are logged in while creating this Protocol,                          // 38
        // store this information as well                                                                             // 41
                                                                                                                      //
        if (Meteor.users && Meteor.userId) {                                                                          // 42
            this.createdBy = Meteor.userId;                                                                           // 43
            this.modifiedBy = Meteor.userId;                                                                          // 44
        } // Create two empty Sets specifying which roles                                                             // 45
        // have read and write access to this Protocol                                                                // 48
                                                                                                                      //
                                                                                                                      //
        this.availableTo = new Set();                                                                                 // 49
        this.editableBy = new Set(); // Define empty arrays for the Protocol matching rules                           // 50
        // and Stages                                                                                                 // 53
                                                                                                                      //
        this.protocolMatchingRules = [];                                                                              // 54
        this.stages = []; // Define auxiliary values for priors                                                       // 55
                                                                                                                      //
        this.numberOfPriorsReferenced = -1;                                                                           // 58
    }                                                                                                                 // 59
                                                                                                                      //
    Protocol.prototype.getNumberOfPriorsReferenced = function () {                                                    // 12
        function getNumberOfPriorsReferenced() {                                                                      // 12
            var skipCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;                // 61
            var numberOfPriorsReferenced = skipCache !== true ? this.numberOfPriorsReferenced : -1; // Check if information is cached already
                                                                                                                      //
            if (numberOfPriorsReferenced > -1) {                                                                      // 65
                return numberOfPriorsReferenced;                                                                      // 66
            }                                                                                                         // 67
                                                                                                                      //
            numberOfPriorsReferenced = 0; // Search each study matching rule for prior rules                          // 69
            // Each stage can have many viewports that can have                                                       // 72
            // multiple study matching rules.                                                                         // 73
                                                                                                                      //
            this.stages.forEach(function (stage) {                                                                    // 74
                if (!stage.viewports) {                                                                               // 75
                    return;                                                                                           // 76
                }                                                                                                     // 77
                                                                                                                      //
                stage.viewports.forEach(function (viewport) {                                                         // 79
                    if (!viewport.studyMatchingRules) {                                                               // 80
                        return;                                                                                       // 81
                    }                                                                                                 // 82
                                                                                                                      //
                    viewport.studyMatchingRules.forEach(function (rule) {                                             // 84
                        // If the current rule is not a priors rule, it will return -1 then numberOfPriorsReferenced will continue to be 0
                        var priorsReferenced = rule.getNumberOfPriorsReferenced();                                    // 86
                                                                                                                      //
                        if (priorsReferenced > numberOfPriorsReferenced) {                                            // 87
                            numberOfPriorsReferenced = priorsReferenced;                                              // 88
                        }                                                                                             // 89
                    });                                                                                               // 90
                });                                                                                                   // 91
            });                                                                                                       // 92
            this.numberOfPriorsReferenced = numberOfPriorsReferenced;                                                 // 94
            return numberOfPriorsReferenced;                                                                          // 96
        }                                                                                                             // 97
                                                                                                                      //
        return getNumberOfPriorsReferenced;                                                                           // 12
    }();                                                                                                              // 12
                                                                                                                      //
    Protocol.prototype.updateNumberOfPriorsReferenced = function () {                                                 // 12
        function updateNumberOfPriorsReferenced() {                                                                   // 12
            this.getNumberOfPriorsReferenced(true);                                                                   // 100
        }                                                                                                             // 101
                                                                                                                      //
        return updateNumberOfPriorsReferenced;                                                                        // 12
    }(); /**                                                                                                          // 12
          * Method to update the modifiedDate when the Protocol                                                       //
          * has been changed                                                                                          //
          */                                                                                                          //
                                                                                                                      //
    Protocol.prototype.protocolWasModified = function () {                                                            // 12
        function protocolWasModified() {                                                                              // 12
            // If we are logged in while modifying this Protocol,                                                     // 108
            // store this information as well                                                                         // 109
            if (Meteor.users && Meteor.userId) {                                                                      // 110
                this.modifiedBy = Meteor.userId;                                                                      // 111
            } // Protocol has been modified, so mark priors information                                               // 112
            // as "outdated"                                                                                          // 115
                                                                                                                      //
                                                                                                                      //
            this.hasUpdatedPriorsInformation = false; // Update number of priors referenced info                      // 116
                                                                                                                      //
            this.updateNumberOfPriorsReferenced(); // Update the modifiedDate with the current Date/Time              // 119
                                                                                                                      //
            this.modifiedDate = new Date();                                                                           // 122
        }                                                                                                             // 123
                                                                                                                      //
        return protocolWasModified;                                                                                   // 12
    }(); /**                                                                                                          // 12
          * Occasionally the Protocol class needs to be instantiated from a JavaScript Object                         //
          * containing the Protocol data. This function fills in a Protocol with the Object                           //
          * data.                                                                                                     //
          *                                                                                                           //
          * @param input A Protocol as a JavaScript Object, e.g. retrieved from MongoDB or JSON                       //
          */                                                                                                          //
                                                                                                                      //
    Protocol.prototype.fromObject = function () {                                                                     // 12
        function fromObject(input) {                                                                                  // 12
            var _this = this;                                                                                         // 132
                                                                                                                      //
            // Check if the input already has an ID                                                                   // 133
            // If so, keep it. It not, create a new UUID                                                              // 134
            this.id = input.id || Random.id(); // Assign the input name to the Protocol                               // 135
                                                                                                                      //
            this.name = input.name; // Retrieve locked status, use !! to make it truthy                               // 138
            // so that undefined values will be set to false                                                          // 141
                                                                                                                      //
            this.locked = !!input.locked; // TODO: Check how to regenerate Set from Object                            // 142
            //this.availableTo = new Set(input.availableTo);                                                          // 145
            //this.editableBy = new Set(input.editableBy);                                                            // 146
            // If the input contains Protocol matching rules                                                          // 148
                                                                                                                      //
            if (input.protocolMatchingRules) {                                                                        // 149
                input.protocolMatchingRules.forEach(function (ruleObject) {                                           // 150
                    // Create new Rules from the stored data                                                          // 151
                    var rule = new HP.ProtocolMatchingRule();                                                         // 152
                    rule.fromObject(ruleObject); // Add them to the Protocol                                          // 153
                                                                                                                      //
                    _this.protocolMatchingRules.push(rule);                                                           // 156
                });                                                                                                   // 157
            } // If the input contains data for various Stages in the                                                 // 158
            // display set sequence                                                                                   // 161
                                                                                                                      //
                                                                                                                      //
            if (input.stages) {                                                                                       // 162
                input.stages.forEach(function (stageObject) {                                                         // 163
                    // Create Stages from the stored data                                                             // 164
                    var stage = new HP.Stage();                                                                       // 165
                    stage.fromObject(stageObject); // Add them to the Protocol                                        // 166
                                                                                                                      //
                    _this.stages.push(stage);                                                                         // 169
                });                                                                                                   // 170
            }                                                                                                         // 171
        }                                                                                                             // 172
                                                                                                                      //
        return fromObject;                                                                                            // 12
    }(); /**                                                                                                          // 12
          * Creates a clone of the current Protocol with a new name                                                   //
          *                                                                                                           //
          * @param name                                                                                               //
          * @returns {Protocol|*}                                                                                     //
          */                                                                                                          //
                                                                                                                      //
    Protocol.prototype.createClone = function () {                                                                    // 12
        function createClone(name) {                                                                                  // 12
            // Create a new JavaScript independent of the current Protocol                                            // 181
            var currentProtocol = Object.assign({}, this); // Create a new Protocol to return                         // 182
                                                                                                                      //
            var clonedProtocol = new HP.Protocol(); // Apply the desired properties                                   // 185
                                                                                                                      //
            currentProtocol.id = clonedProtocol.id;                                                                   // 188
            clonedProtocol.fromObject(currentProtocol); // If we have specified a name, assign it                     // 189
                                                                                                                      //
            if (name) {                                                                                               // 192
                clonedProtocol.name = name;                                                                           // 193
            } // Unlock the clone                                                                                     // 194
                                                                                                                      //
                                                                                                                      //
            clonedProtocol.locked = false; // Return the cloned Protocol                                              // 197
                                                                                                                      //
            return clonedProtocol;                                                                                    // 200
        }                                                                                                             // 201
                                                                                                                      //
        return createClone;                                                                                           // 12
    }(); /**                                                                                                          // 12
          * Adds a Stage to this Protocol's display set sequence                                                      //
          *                                                                                                           //
          * @param stage                                                                                              //
          */                                                                                                          //
                                                                                                                      //
    Protocol.prototype.addStage = function () {                                                                       // 12
        function addStage(stage) {                                                                                    // 12
            this.stages.push(stage); // Update the modifiedDate and User that last                                    // 209
            // modified this Protocol                                                                                 // 212
                                                                                                                      //
            this.protocolWasModified();                                                                               // 213
        }                                                                                                             // 214
                                                                                                                      //
        return addStage;                                                                                              // 12
    }(); /**                                                                                                          // 12
          * Adds a Rule to this Protocol's array of matching rules                                                    //
          *                                                                                                           //
          * @param rule                                                                                               //
          */                                                                                                          //
                                                                                                                      //
    Protocol.prototype.addProtocolMatchingRule = function () {                                                        // 12
        function addProtocolMatchingRule(rule) {                                                                      // 12
            this.protocolMatchingRules.push(rule); // Update the modifiedDate and User that last                      // 222
            // modified this Protocol                                                                                 // 225
                                                                                                                      //
            this.protocolWasModified();                                                                               // 226
        }                                                                                                             // 227
                                                                                                                      //
        return addProtocolMatchingRule;                                                                               // 12
    }(); /**                                                                                                          // 12
          * Removes a Rule from this Protocol's array of matching rules                                               //
          *                                                                                                           //
          * @param rule                                                                                               //
          */                                                                                                          //
                                                                                                                      //
    Protocol.prototype.removeProtocolMatchingRule = function () {                                                     // 12
        function removeProtocolMatchingRule(rule) {                                                                   // 12
            var wasRemoved = removeFromArray(this.protocolMatchingRules, rule); // Update the modifiedDate and User that last
            // modified this Protocol                                                                                 // 238
                                                                                                                      //
            if (wasRemoved) {                                                                                         // 239
                this.protocolWasModified();                                                                           // 240
            }                                                                                                         // 241
        }                                                                                                             // 242
                                                                                                                      //
        return removeProtocolMatchingRule;                                                                            // 12
    }();                                                                                                              // 12
                                                                                                                      //
    return Protocol;                                                                                                  // 12
}();                                                                                                                  // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Rule.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/classes/Rule.js                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
module.export({                                                                                                       // 1
    Rule: function () {                                                                                               // 1
        return Rule;                                                                                                  // 1
    }                                                                                                                 // 1
});                                                                                                                   // 1
var Random = void 0;                                                                                                  // 1
module.watch(require("meteor/random"), {                                                                              // 1
    Random: function (v) {                                                                                            // 1
        Random = v;                                                                                                   // 1
    }                                                                                                                 // 1
}, 0);                                                                                                                // 1
var comparators = void 0;                                                                                             // 1
module.watch(require("../lib/comparators"), {                                                                         // 1
    comparators: function (v) {                                                                                       // 1
        comparators = v;                                                                                              // 1
    }                                                                                                                 // 1
}, 1);                                                                                                                // 1
var EQUALS_REGEXP = /^equals$/; /**                                                                                   // 5
                                 * This Class represents a Rule to be evaluated given a set of attributes             //
                                 * Rules have:                                                                        //
                                 * - An attribute (e.g. 'seriesDescription')                                          //
                                 * - A constraint Object, in the form required by Validate.js:                        //
                                 *                                                                                    //
                                 * rule.constraint = {                                                                //
                                 *   contains: {                                                                      //
                                 *      value: 'T-1'                                                                  //
                                 *      }                                                                             //
                                 *   };                                                                               //
                                 *                                                                                    //
                                 *  Note: In this example we use the 'contains' Validator, which is a custom Validator defined in Viewerbase
                                 *                                                                                    //
                                 * - A value for whether or not they are Required to be matched (default: False)      //
                                 * - A value for their relative weighting during Protocol or Image matching (default: 1)
                                 */                                                                                   //
                                                                                                                      //
var Rule = function () {                                                                                              //
    /**                                                                                                               // 25
     * The Constructor for the Class to create a Rule with the bare                                                   //
     * minimum information                                                                                            //
     *                                                                                                                //
     * @param name The desired name for the Rule                                                                      //
     */function Rule(attribute, constraint, required, weight) {                                                       //
        (0, _classCallCheck3.default)(this, Rule);                                                                    // 31
        // Create a new UUID for this Rule                                                                            // 32
        this.id = Random.id(); // Set the Rule's weight (defaults to 1)                                               // 33
                                                                                                                      //
        this.weight = weight || 1; // If an attribute is specified, assign it                                         // 36
                                                                                                                      //
        if (attribute) {                                                                                              // 39
            this.attribute = attribute;                                                                               // 40
        } // If a constraint is specified, assign it                                                                  // 41
                                                                                                                      //
                                                                                                                      //
        if (constraint) {                                                                                             // 44
            this.constraint = constraint;                                                                             // 45
        } // If a value for 'required' is specified, assign it                                                        // 46
                                                                                                                      //
                                                                                                                      //
        if (required === undefined) {                                                                                 // 49
            // If no value was specified, default to False                                                            // 50
            this.required = false;                                                                                    // 51
        } else {                                                                                                      // 52
            this.required = required;                                                                                 // 53
        } // Cache for constraint info object                                                                         // 54
                                                                                                                      //
                                                                                                                      //
        this._constraintInfo = void 0; // Cache for validator and value object                                        // 57
                                                                                                                      //
        this._validatorAndValue = void 0;                                                                             // 60
    } /**                                                                                                             // 61
       * Occasionally the Rule class needs to be instantiated from a JavaScript Object.                               //
       * This function fills in a Protocol with the Object data.                                                      //
       *                                                                                                              //
       * @param input A Rule as a JavaScript Object, e.g. retrieved from MongoDB or JSON                              //
       */                                                                                                             //
                                                                                                                      //
    Rule.prototype.fromObject = function () {                                                                         //
        function fromObject(input) {                                                                                  //
            // Check if the input already has an ID                                                                   // 70
            // If so, keep it. It not, create a new UUID                                                              // 71
            this.id = input.id || Random.id(); // Assign the specified input data to the Rule                         // 72
                                                                                                                      //
            this.required = input.required;                                                                           // 75
            this.weight = input.weight;                                                                               // 76
            this.attribute = input.attribute;                                                                         // 77
            this.constraint = input.constraint;                                                                       // 78
        }                                                                                                             // 79
                                                                                                                      //
        return fromObject;                                                                                            //
    }(); /**                                                                                                          //
          * Get the constraint info object for the current constraint                                                 //
          * @return {Object\undefined} Constraint object or undefined if current constraint                           //
          *                            is not valid or not found in comparators list                                  //
          */                                                                                                          //
                                                                                                                      //
    Rule.prototype.getConstraintInfo = function () {                                                                  //
        function getConstraintInfo() {                                                                                //
            var constraintInfo = this._constraintInfo; // Check if info is cached already                             // 87
                                                                                                                      //
            if (constraintInfo !== void 0) {                                                                          // 89
                return constraintInfo;                                                                                // 90
            }                                                                                                         // 91
                                                                                                                      //
            var ruleConstraint = Object.keys(this.constraint)[0];                                                     // 93
                                                                                                                      //
            if (ruleConstraint !== void 0) {                                                                          // 95
                constraintInfo = comparators.find(function (comparator) {                                             // 96
                    return ruleConstraint === comparator.id;                                                          // 96
                });                                                                                                   // 96
            } // Cache this information for later use                                                                 // 97
                                                                                                                      //
                                                                                                                      //
            this._constraintInfo = constraintInfo;                                                                    // 100
            return constraintInfo;                                                                                    // 102
        }                                                                                                             // 103
                                                                                                                      //
        return getConstraintInfo;                                                                                     //
    }(); /**                                                                                                          //
         * Check if current rule is related to priors                                                                 //
         * @return {Boolean} True if a rule is related to priors or false otherwise                                   //
         */                                                                                                           //
                                                                                                                      //
    Rule.prototype.isRuleForPrior = function () {                                                                     //
        function isRuleForPrior() {                                                                                   //
            // @TODO: Should we check this too? this.attribute === 'relativeTime'                                     // 110
            return this.attribute === 'abstractPriorValue';                                                           // 111
        }                                                                                                             // 112
                                                                                                                      //
        return isRuleForPrior;                                                                                        //
    }(); /**                                                                                                          //
          * If the current rule is a rule for priors, returns the number of referenced priors. Otherwise, returns -1.
          * @return {Number} The number of referenced priors or -1 if not applicable. Returns zero if the actual value could not be determined.
          */                                                                                                          //
                                                                                                                      //
    Rule.prototype.getNumberOfPriorsReferenced = function () {                                                        //
        function getNumberOfPriorsReferenced() {                                                                      //
            if (!this.isRuleForPrior()) {                                                                             // 119
                return -1;                                                                                            // 120
            } // Get rule's validator and value                                                                       // 121
                                                                                                                      //
                                                                                                                      //
            var ruleValidatorAndValue = this.getConstraintValidatorAndValue();                                        // 124
            var value = ruleValidatorAndValue.value,                                                                  // 118
                validator = ruleValidatorAndValue.validator;                                                          // 118
            var intValue = parseInt(value, 10) || 0; // avoid possible NaN                                            // 126
            // "Equal to" validators                                                                                  // 128
                                                                                                                      //
            if (EQUALS_REGEXP.test(validator)) {                                                                      // 129
                // In this case, -1 (the oldest prior) indicates that at least one study is used                      // 130
                return intValue < 0 ? 1 : intValue;                                                                   // 131
            } // Default cases return value                                                                           // 132
                                                                                                                      //
                                                                                                                      //
            return 0;                                                                                                 // 135
        }                                                                                                             // 136
                                                                                                                      //
        return getNumberOfPriorsReferenced;                                                                           //
    }(); /**                                                                                                          //
          * Get the constraint validator and value                                                                    //
          * @return {Object|undefined} Returns an object containing the validator and it's value or undefined         //
          */                                                                                                          //
                                                                                                                      //
    Rule.prototype.getConstraintValidatorAndValue = function () {                                                     //
        function getConstraintValidatorAndValue() {                                                                   //
            var validatorAndValue = this._validatorAndValue; // Check if validator and value are cached already       // 143
                                                                                                                      //
            if (validatorAndValue !== void 0) {                                                                       // 146
                return validatorAndValue;                                                                             // 147
            } // Get the constraint info object                                                                       // 148
                                                                                                                      //
                                                                                                                      //
            var constraintInfo = this.getConstraintInfo(); // Constraint info object exists and is valid              // 151
                                                                                                                      //
            if (constraintInfo !== void 0) {                                                                          // 154
                var validator = constraintInfo.validator;                                                             // 155
                var currentValidator = this.constraint[validator];                                                    // 156
                                                                                                                      //
                if (currentValidator) {                                                                               // 158
                    var constraintValidator = constraintInfo.validatorOption;                                         // 159
                    var constraintValue = currentValidator[constraintValidator];                                      // 160
                    validatorAndValue = {                                                                             // 162
                        value: constraintValue,                                                                       // 163
                        validator: constraintInfo.id                                                                  // 164
                    };                                                                                                // 162
                    this._validatorAndValue = validatorAndValue;                                                      // 167
                }                                                                                                     // 168
            }                                                                                                         // 169
                                                                                                                      //
            return validatorAndValue;                                                                                 // 171
        }                                                                                                             // 172
                                                                                                                      //
        return getConstraintValidatorAndValue;                                                                        //
    }();                                                                                                              //
                                                                                                                      //
    return Rule;                                                                                                      //
}();                                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Stage.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/classes/Stage.js                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var Random = void 0;                                                                                                  // 1
module.watch(require("meteor/random"), {                                                                              // 1
    Random: function (v) {                                                                                            // 1
        Random = v;                                                                                                   // 1
    }                                                                                                                 // 1
}, 0);                                                                                                                // 1
                                                                                                                      //
/**                                                                                                                   // 3
 * A Stage is one step in the Display Set Sequence for a Hanging Protocol                                             //
 *                                                                                                                    //
 * Stages are defined as a ViewportStructure and an array of Viewports                                                //
 *                                                                                                                    //
 * @type {Stage}                                                                                                      //
 */HP.Stage = function () {                                                                                           //
    function Stage(ViewportStructure, name) {                                                                         // 11
        (0, _classCallCheck3.default)(this, Stage);                                                                   // 11
        // Create a new UUID for this Stage                                                                           // 12
        this.id = Random.id(); // Assign the name and ViewportStructure provided                                      // 13
                                                                                                                      //
        this.name = name;                                                                                             // 16
        this.viewportStructure = ViewportStructure; // Create an empty array for the Viewports                        // 17
                                                                                                                      //
        this.viewports = []; // Set the created date to Now                                                           // 20
                                                                                                                      //
        this.createdDate = new Date();                                                                                // 23
    } /**                                                                                                             // 24
       * Creates a clone of the current Stage with a new name                                                         //
       *                                                                                                              //
       * Note! This method absolutely cannot be renamed 'clone', because                                              //
       * Minimongo's insert method uses 'clone' internally and this                                                   //
       * somehow causes very bizarre behaviour                                                                        //
       *                                                                                                              //
       * @param name                                                                                                  //
       * @returns {Stage|*}                                                                                           //
       */                                                                                                             //
                                                                                                                      //
    Stage.prototype.createClone = function () {                                                                       // 10
        function createClone(name) {                                                                                  // 10
            // Create a new JavaScript independent of the current Protocol                                            // 37
            var currentStage = Object.assign({}, this); // Create a new Stage to return                               // 38
                                                                                                                      //
            var clonedStage = new HP.Stage(); // Assign the desired properties                                        // 41
                                                                                                                      //
            currentStage.id = clonedStage.id;                                                                         // 44
            clonedStage.fromObject(currentStage); // If we have specified a name, assign it                           // 45
                                                                                                                      //
            if (name) {                                                                                               // 48
                clonedStage.name = name;                                                                              // 49
            } // Return the cloned Stage                                                                              // 50
                                                                                                                      //
                                                                                                                      //
            return clonedStage;                                                                                       // 53
        }                                                                                                             // 54
                                                                                                                      //
        return createClone;                                                                                           // 10
    }(); /**                                                                                                          // 10
          * Occasionally the Stage class needs to be instantiated from a JavaScript Object.                           //
          * This function fills in a Protocol with the Object data.                                                   //
          *                                                                                                           //
          * @param input A Stage as a JavaScript Object, e.g. retrieved from MongoDB or JSON                          //
          */                                                                                                          //
                                                                                                                      //
    Stage.prototype.fromObject = function () {                                                                        // 10
        function fromObject(input) {                                                                                  // 10
            var _this = this;                                                                                         // 62
                                                                                                                      //
            // Check if the input already has an ID                                                                   // 63
            // If so, keep it. It not, create a new UUID                                                              // 64
            this.id = input.id || Random.id(); // Assign the input name to the Stage                                  // 65
                                                                                                                      //
            this.name = input.name; // If a ViewportStructure is present in the input, add it from the                // 68
            // input data                                                                                             // 71
                                                                                                                      //
            this.viewportStructure = new HP.ViewportStructure();                                                      // 72
            this.viewportStructure.fromObject(input.viewportStructure); // If any viewports are present in the input object
                                                                                                                      //
            if (input.viewports) {                                                                                    // 76
                input.viewports.forEach(function (viewportObject) {                                                   // 77
                    // Create a new Viewport with their data                                                          // 78
                    var viewport = new HP.Viewport();                                                                 // 79
                    viewport.fromObject(viewportObject); // Add it to the viewports array                             // 80
                                                                                                                      //
                    _this.viewports.push(viewport);                                                                   // 83
                });                                                                                                   // 84
            }                                                                                                         // 85
        }                                                                                                             // 86
                                                                                                                      //
        return fromObject;                                                                                            // 10
    }();                                                                                                              // 10
                                                                                                                      //
    return Stage;                                                                                                     // 10
}();                                                                                                                  // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Viewport.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/classes/Viewport.js                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var removeFromArray = void 0;                                                                                         // 1
module.watch(require("../lib/removeFromArray"), {                                                                     // 1
    removeFromArray: function (v) {                                                                                   // 1
        removeFromArray = v;                                                                                          // 1
    }                                                                                                                 // 1
}, 0);                                                                                                                // 1
                                                                                                                      //
/**                                                                                                                   // 4
 * This Class defines a Viewport in the Hanging Protocol Stage. A Viewport contains                                   //
 * arrays of Rules that are matched in the ProtocolEngine in order to determine which                                 //
 * images should be hung.                                                                                             //
 *                                                                                                                    //
 * @type {Viewport}                                                                                                   //
 */HP.Viewport = function () {                                                                                        //
    function Viewport() {                                                                                             // 12
        (0, _classCallCheck3.default)(this, Viewport);                                                                // 12
        this.viewportSettings = {};                                                                                   // 13
        this.imageMatchingRules = [];                                                                                 // 14
        this.seriesMatchingRules = [];                                                                                // 15
        this.studyMatchingRules = [];                                                                                 // 16
    } /**                                                                                                             // 17
       * Occasionally the Viewport class needs to be instantiated from a JavaScript Object.                           //
       * This function fills in a Viewport with the Object data.                                                      //
       *                                                                                                              //
       * @param input The Viewport as a JavaScript Object, e.g. retrieved from MongoDB or JSON                        //
       */                                                                                                             //
                                                                                                                      //
    Viewport.prototype.fromObject = function () {                                                                     // 11
        function fromObject(input) {                                                                                  // 11
            var _this = this;                                                                                         // 25
                                                                                                                      //
            // If ImageMatchingRules exist, create them from the Object data                                          // 26
            // and add them to the Viewport's imageMatchingRules array                                                // 27
            if (input.imageMatchingRules) {                                                                           // 28
                input.imageMatchingRules.forEach(function (ruleObject) {                                              // 29
                    var rule = new HP.ImageMatchingRule();                                                            // 30
                    rule.fromObject(ruleObject);                                                                      // 31
                                                                                                                      //
                    _this.imageMatchingRules.push(rule);                                                              // 32
                });                                                                                                   // 33
            } // If SeriesMatchingRules exist, create them from the Object data                                       // 34
            // and add them to the Viewport's seriesMatchingRules array                                               // 37
                                                                                                                      //
                                                                                                                      //
            if (input.seriesMatchingRules) {                                                                          // 38
                input.seriesMatchingRules.forEach(function (ruleObject) {                                             // 39
                    var rule = new HP.SeriesMatchingRule();                                                           // 40
                    rule.fromObject(ruleObject);                                                                      // 41
                                                                                                                      //
                    _this.seriesMatchingRules.push(rule);                                                             // 42
                });                                                                                                   // 43
            } // If StudyMatchingRules exist, create them from the Object data                                        // 44
            // and add them to the Viewport's studyMatchingRules array                                                // 47
                                                                                                                      //
                                                                                                                      //
            if (input.studyMatchingRules) {                                                                           // 48
                input.studyMatchingRules.forEach(function (ruleObject) {                                              // 49
                    var rule = new HP.StudyMatchingRule();                                                            // 50
                    rule.fromObject(ruleObject);                                                                      // 51
                                                                                                                      //
                    _this.studyMatchingRules.push(rule);                                                              // 52
                });                                                                                                   // 53
            } // If ViewportSettings exist, add them to the current protocol                                          // 54
                                                                                                                      //
                                                                                                                      //
            if (input.viewportSettings) {                                                                             // 57
                this.viewportSettings = input.viewportSettings;                                                       // 58
            }                                                                                                         // 59
        }                                                                                                             // 60
                                                                                                                      //
        return fromObject;                                                                                            // 11
    }(); /**                                                                                                          // 11
          * Finds and removes a rule from whichever array it exists in.                                               //
          * It is not required to specify if it exists in studyMatchingRules,                                         //
          * seriesMatchingRules, or imageMatchingRules                                                                //
          *                                                                                                           //
          * @param rule                                                                                               //
          */                                                                                                          //
                                                                                                                      //
    Viewport.prototype.removeRule = function () {                                                                     // 11
        function removeRule(rule) {                                                                                   // 11
            var array;                                                                                                // 70
                                                                                                                      //
            if (rule instanceof HP.StudyMatchingRule) {                                                               // 71
                array = this.studyMatchingRules;                                                                      // 72
            } else if (rule instanceof HP.SeriesMatchingRule) {                                                       // 73
                array = this.seriesMatchingRules;                                                                     // 74
            } else if (rule instanceof HP.ImageMatchingRule) {                                                        // 75
                array = this.imageMatchingRules;                                                                      // 76
            }                                                                                                         // 77
                                                                                                                      //
            removeFromArray(array, rule);                                                                             // 79
        }                                                                                                             // 80
                                                                                                                      //
        return removeRule;                                                                                            // 11
    }();                                                                                                              // 11
                                                                                                                      //
    return Viewport;                                                                                                  // 11
}();                                                                                                                  // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ViewportStructure.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/classes/ViewportStructure.js                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
/**                                                                                                                   // 1
 * The ViewportStructure class represents the layout and layout properties that                                       //
 * Viewports are displayed in. ViewportStructure has a type, which corresponds to                                     //
 * a layout template, and a set of properties, which depend on the type.                                              //
 *                                                                                                                    //
 * @type {ViewportStructure}                                                                                          //
 */HP.ViewportStructure = function () {                                                                               //
    function ViewportStructure(type, properties) {                                                                    // 9
        (0, _classCallCheck3.default)(this, ViewportStructure);                                                       // 9
        this.type = type;                                                                                             // 10
        this.properties = properties;                                                                                 // 11
    } /**                                                                                                             // 12
       * Occasionally the ViewportStructure class needs to be instantiated from a JavaScript Object.                  //
       * This function fills in a ViewportStructure with the Object data.                                             //
       *                                                                                                              //
       * @param input The ViewportStructure as a JavaScript Object, e.g. retrieved from MongoDB or JSON               //
       */                                                                                                             //
                                                                                                                      //
    ViewportStructure.prototype.fromObject = function () {                                                            // 8
        function fromObject(input) {                                                                                  // 8
            this.type = input.type;                                                                                   // 21
            this.properties = input.properties;                                                                       // 22
        }                                                                                                             // 23
                                                                                                                      //
        return fromObject;                                                                                            // 8
    }(); /**                                                                                                          // 8
          * Retrieve the layout template name based on the layout type                                                //
          *                                                                                                           //
          * @returns {string}                                                                                         //
          */                                                                                                          //
                                                                                                                      //
    ViewportStructure.prototype.getLayoutTemplateName = function () {                                                 // 8
        function getLayoutTemplateName() {                                                                            // 8
            // Viewport structure can be updated later when we build more complex display layouts                     // 31
            switch (this.type) {                                                                                      // 32
                case 'grid':                                                                                          // 33
                    return 'gridLayout';                                                                              // 34
            }                                                                                                         // 32
        }                                                                                                             // 36
                                                                                                                      //
        return getLayoutTemplateName;                                                                                 // 8
    }(); /**                                                                                                          // 8
          * Retrieve the number of Viewports required for this layout                                                 //
          * given the layout type and properties                                                                      //
          *                                                                                                           //
          * @returns {string}                                                                                         //
          */                                                                                                          //
                                                                                                                      //
    ViewportStructure.prototype.getNumViewports = function () {                                                       // 8
        function getNumViewports() {                                                                                  // 8
            // Viewport structure can be updated later when we build more complex display layouts                     // 45
            switch (this.type) {                                                                                      // 46
                case 'grid':                                                                                          // 47
                    // For the typical grid layout, we only need to multiply rows by columns to                       // 48
                    // obtain the number of viewports                                                                 // 49
                    return this.properties.rows * this.properties.columns;                                            // 50
            }                                                                                                         // 46
        }                                                                                                             // 52
                                                                                                                      //
        return getNumViewports;                                                                                       // 8
    }();                                                                                                              // 8
                                                                                                                      //
    return ViewportStructure;                                                                                         // 8
}();                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rules":{"ImageMatchingRule.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/classes/rules/ImageMatchingRule.js                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var Rule = void 0;                                                                                                    // 1
module.watch(require("../Rule"), {                                                                                    // 1
  Rule: function (v) {                                                                                                // 1
    Rule = v;                                                                                                         // 1
  }                                                                                                                   // 1
}, 0);                                                                                                                // 1
                                                                                                                      //
/**                                                                                                                   // 3
 * The ImageMatchingRule class extends the Rule Class.                                                                //
 *                                                                                                                    //
 * At present it does not add any new methods or attributes                                                           //
 * @type {ImageMatchingRule}                                                                                          //
 */HP.ImageMatchingRule = function (_Rule) {                                                                          //
  (0, _inherits3.default)(ImageMatchingRule, _Rule);                                                                  // 9
                                                                                                                      //
  function ImageMatchingRule() {                                                                                      // 9
    (0, _classCallCheck3.default)(this, ImageMatchingRule);                                                           // 9
    return (0, _possibleConstructorReturn3.default)(this, _Rule.apply(this, arguments));                              // 9
  }                                                                                                                   // 9
                                                                                                                      //
  return ImageMatchingRule;                                                                                           // 9
}(Rule);                                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ProtocolMatchingRule.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/classes/rules/ProtocolMatchingRule.js                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var Rule = void 0;                                                                                                    // 1
module.watch(require("../Rule"), {                                                                                    // 1
  Rule: function (v) {                                                                                                // 1
    Rule = v;                                                                                                         // 1
  }                                                                                                                   // 1
}, 0);                                                                                                                // 1
                                                                                                                      //
/**                                                                                                                   // 3
 * The ProtocolMatchingRule Class extends the Rule Class.                                                             //
 *                                                                                                                    //
 * At present it does not add any new methods or attributes                                                           //
 * @type {ProtocolMatchingRule}                                                                                       //
 */HP.ProtocolMatchingRule = function (_Rule) {                                                                       //
  (0, _inherits3.default)(ProtocolMatchingRule, _Rule);                                                               // 9
                                                                                                                      //
  function ProtocolMatchingRule() {                                                                                   // 9
    (0, _classCallCheck3.default)(this, ProtocolMatchingRule);                                                        // 9
    return (0, _possibleConstructorReturn3.default)(this, _Rule.apply(this, arguments));                              // 9
  }                                                                                                                   // 9
                                                                                                                      //
  return ProtocolMatchingRule;                                                                                        // 9
}(Rule);                                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SeriesMatchingRule.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/classes/rules/SeriesMatchingRule.js                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var Rule = void 0;                                                                                                    // 1
module.watch(require("../Rule"), {                                                                                    // 1
  Rule: function (v) {                                                                                                // 1
    Rule = v;                                                                                                         // 1
  }                                                                                                                   // 1
}, 0);                                                                                                                // 1
                                                                                                                      //
/**                                                                                                                   // 3
 * The SeriesMatchingRule Class extends the Rule Class.                                                               //
 *                                                                                                                    //
 * At present it does not add any new methods or attributes                                                           //
 * @type {SeriesMatchingRule}                                                                                         //
 */HP.SeriesMatchingRule = function (_Rule) {                                                                         //
  (0, _inherits3.default)(SeriesMatchingRule, _Rule);                                                                 // 9
                                                                                                                      //
  function SeriesMatchingRule() {                                                                                     // 9
    (0, _classCallCheck3.default)(this, SeriesMatchingRule);                                                          // 9
    return (0, _possibleConstructorReturn3.default)(this, _Rule.apply(this, arguments));                              // 9
  }                                                                                                                   // 9
                                                                                                                      //
  return SeriesMatchingRule;                                                                                          // 9
}(Rule);                                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StudyMatchingRule.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/classes/rules/StudyMatchingRule.js                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var Rule = void 0;                                                                                                    // 1
module.watch(require("../Rule"), {                                                                                    // 1
  Rule: function (v) {                                                                                                // 1
    Rule = v;                                                                                                         // 1
  }                                                                                                                   // 1
}, 0);                                                                                                                // 1
                                                                                                                      //
/**                                                                                                                   // 3
 * The StudyMatchingRule Class extends the Rule Class.                                                                //
 *                                                                                                                    //
 * At present it does not add any new methods or attributes                                                           //
 * @type {StudyMatchingRule}                                                                                          //
 */HP.StudyMatchingRule = function (_Rule) {                                                                          //
  (0, _inherits3.default)(StudyMatchingRule, _Rule);                                                                  // 9
                                                                                                                      //
  function StudyMatchingRule() {                                                                                      // 9
    (0, _classCallCheck3.default)(this, StudyMatchingRule);                                                           // 9
    return (0, _possibleConstructorReturn3.default)(this, _Rule.apply(this, arguments));                              // 9
  }                                                                                                                   // 9
                                                                                                                      //
  return StudyMatchingRule;                                                                                           // 9
}(Rule);                                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"comparators.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/lib/comparators.js                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({                                                                                                       // 1
    comparators: function () {                                                                                        // 1
        return comparators;                                                                                           // 1
    }                                                                                                                 // 1
});                                                                                                                   // 1
var comparators = [{                                                                                                  // 1
    id: 'equals',                                                                                                     // 2
    name: '= (Equals)',                                                                                               // 3
    validator: 'equals',                                                                                              // 4
    validatorOption: 'value',                                                                                         // 5
    description: 'The attribute must equal this value.'                                                               // 6
}, {                                                                                                                  // 1
    id: 'doesNotEqual',                                                                                               // 8
    name: '!= (Does not equal)',                                                                                      // 9
    validator: 'doesNotEqual',                                                                                        // 10
    validatorOption: 'value',                                                                                         // 11
    description: 'The attribute must not equal this value.'                                                           // 12
}, {                                                                                                                  // 7
    id: 'contains',                                                                                                   // 14
    name: 'Contains',                                                                                                 // 15
    validator: 'contains',                                                                                            // 16
    validatorOption: 'value',                                                                                         // 17
    description: 'The attribute must contain this value.'                                                             // 18
}, {                                                                                                                  // 13
    id: 'doesNotContain',                                                                                             // 20
    name: 'Does not contain',                                                                                         // 21
    validator: 'doesNotContain',                                                                                      // 22
    validatorOption: 'value',                                                                                         // 23
    description: 'The attribute must not contain this value.'                                                         // 24
}, {                                                                                                                  // 19
    id: 'onlyInteger',                                                                                                // 26
    name: 'Only Integers',                                                                                            // 27
    validator: 'numericality',                                                                                        // 28
    validatorOption: 'onlyInteger',                                                                                   // 29
    description: "Real numbers won't be allowed."                                                                     // 30
}, {                                                                                                                  // 25
    id: 'greaterThan',                                                                                                // 32
    name: '> (Greater than)',                                                                                         // 33
    validator: 'numericality',                                                                                        // 34
    validatorOption: 'greaterThan',                                                                                   // 35
    description: 'The attribute has to be greater than this value.'                                                   // 36
}, {                                                                                                                  // 31
    id: 'greaterThanOrEqualTo',                                                                                       // 38
    name: '>= (Greater than or equal to)',                                                                            // 39
    validator: 'numericality',                                                                                        // 40
    validatorOption: 'greaterThanOrEqualTo',                                                                          // 41
    description: 'The attribute has to be at least this value.'                                                       // 42
}, {                                                                                                                  // 37
    id: 'lessThanOrEqualTo',                                                                                          // 44
    name: '<= (Less than or equal to)',                                                                               // 45
    validator: 'numericality',                                                                                        // 46
    validatorOption: 'lessThanOrEqualTo',                                                                             // 47
    description: 'The attribute can be this value at the most.'                                                       // 48
}, {                                                                                                                  // 43
    id: 'lessThan',                                                                                                   // 50
    name: '< (Less than)',                                                                                            // 51
    validator: 'numericality',                                                                                        // 52
    validatorOption: 'lessThan',                                                                                      // 53
    description: 'The attribute has to be less than this value.'                                                      // 54
}, {                                                                                                                  // 49
    id: 'odd',                                                                                                        // 56
    name: 'Odd',                                                                                                      // 57
    validator: 'numericality',                                                                                        // 58
    validatorOption: 'odd',                                                                                           // 59
    description: 'The attribute has to be odd.'                                                                       // 60
}, {                                                                                                                  // 55
    id: 'even',                                                                                                       // 62
    name: 'Even',                                                                                                     // 63
    validator: 'numericality',                                                                                        // 64
    validatorOption: 'even',                                                                                          // 65
    description: 'The attribute has to be even.'                                                                      // 66
}]; // Immutable object                                                                                               // 61
                                                                                                                      //
Object.freeze(comparators);                                                                                           // 70
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"removeFromArray.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/both/lib/removeFromArray.js                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({                                                                                                       // 1
    removeFromArray: function () {                                                                                    // 1
        return removeFromArray;                                                                                       // 1
    }                                                                                                                 // 1
});                                                                                                                   // 1
                                                                                                                      //
var _ = void 0;                                                                                                       // 1
                                                                                                                      //
module.watch(require("meteor/underscore"), {                                                                          // 1
    _: function (v) {                                                                                                 // 1
        _ = v;                                                                                                        // 1
    }                                                                                                                 // 1
}, 0);                                                                                                                // 1
                                                                                                                      //
/**                                                                                                                   // 3
 * Removes the first instance of an element from an array, if an equal value exists                                   //
 *                                                                                                                    //
 * @param array                                                                                                       //
 * @param input                                                                                                       //
 *                                                                                                                    //
 * @returns {boolean} Whether or not the element was found and removed                                                //
 */var removeFromArray = function (array, input) {                                                                    //
    // If the array is empty, stop here                                                                               // 12
    if (!array || !array.length) {                                                                                    // 13
        return false;                                                                                                 // 15
    }                                                                                                                 // 16
                                                                                                                      //
    array.forEach(function (value, index) {                                                                           // 18
        if (_.isEqual(value, input)) {                                                                                // 19
            indexToRemove = index;                                                                                    // 20
            return false;                                                                                             // 21
        }                                                                                                             // 22
    });                                                                                                               // 23
                                                                                                                      //
    if (indexToRemove === void 0) {                                                                                   // 25
        return false;                                                                                                 // 26
    }                                                                                                                 // 27
                                                                                                                      //
    array.splice(indexToRemove, 1);                                                                                   // 29
    return true;                                                                                                      // 30
};                                                                                                                    // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"collections.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_hanging-protocols/server/collections.js                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.publish('hangingprotocols', function () {                                                                      // 1
    // TODO: filter by availableTo user                                                                               // 2
    return HangingProtocols.find();                                                                                   // 3
});                                                                                                                   // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/ohif:hanging-protocols/both/namespace.js");
require("./node_modules/meteor/ohif:hanging-protocols/both/collections.js");
require("./node_modules/meteor/ohif:hanging-protocols/both/schema.js");
require("./node_modules/meteor/ohif:hanging-protocols/both/hardcodedData.js");
require("./node_modules/meteor/ohif:hanging-protocols/both/testData.js");
require("./node_modules/meteor/ohif:hanging-protocols/server/collections.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ohif:hanging-protocols'] = {}, {
  HP: HP
});

})();

//# sourceMappingURL=ohif_hanging-protocols.js.map
