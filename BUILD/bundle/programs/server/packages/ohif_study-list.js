(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var Random = Package.random.Random;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Accounts = Package['accounts-base'].Accounts;
var moment = Package['momentjs:moment'].moment;
var DICOMWeb = Package['ohif:dicom-services'].DICOMWeb;
var DIMSE = Package['ohif:dicom-services'].DIMSE;
var WADOProxy = Package['ohif:wadoproxy'].WADOProxy;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Collection2 = Package['aldeed:collection2-core'].Collection2;
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
var encodeQueryData, Services, remoteGetValue;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:study-list":{"both":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/both/index.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./base.js"));                                                                                    // 1
module.watch(require("./collections.js"));                                                                             // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"base.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/both/base.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF = void 0;                                                                                                     // 1
module.watch(require("meteor/ohif:core"), {                                                                            // 1
    OHIF: function (v) {                                                                                               // 1
        OHIF = v;                                                                                                      // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
OHIF.studylist = {                                                                                                     // 3
    collections: {},                                                                                                   // 4
    actions: {}                                                                                                        // 5
};                                                                                                                     // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collections.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/both/collections.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  StudyImportStatus: function () {                                                                                     // 1
    return StudyImportStatus;                                                                                          // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var OHIF = void 0;                                                                                                     // 1
module.watch(require("meteor/ohif:core"), {                                                                            // 1
  OHIF: function (v) {                                                                                                 // 1
    OHIF = v;                                                                                                          // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var StudyImportStatus = new Mongo.Collection('studyImportStatus');                                                     // 4
StudyImportStatus._debugName = 'StudyImportStatus';                                                                    // 5
OHIF.studylist.collections.StudyImportStatus = StudyImportStatus;                                                      // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/index.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./publications.js"));                                                                            // 1
module.watch(require("./lib"));                                                                                        // 1
module.watch(require("./methods"));                                                                                    // 1
module.watch(require("./services"));                                                                                   // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/publications.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var OHIF = void 0;                                                                                                     // 1
module.watch(require("meteor/ohif:core"), {                                                                            // 1
  OHIF: function (v) {                                                                                                 // 1
    OHIF = v;                                                                                                          // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
Meteor.publish('studyImportStatus', function () {                                                                      // 4
  return OHIF.studylist.collections.StudyImportStatus.find();                                                          // 4
});                                                                                                                    // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"encodeQueryData.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/lib/encodeQueryData.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * Converts the properties to URL query parameters.  Based on:                                                         //
 * http://stackoverflow.com/questions/111529/create-query-parameters-in-javascript                                     //
 *                                                                                                                     //
 * @param data                                                                                                         //
 * @returns {string}                                                                                                   //
 */encodeQueryData = function (data) {                                                                                 //
    var ret = [];                                                                                                      // 9
                                                                                                                       //
    for (var d in meteorBabelHelpers.sanitizeForInObject(data)) {                                                      // 11
        if (data[d]) {                                                                                                 // 12
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));                                       // 13
        }                                                                                                              // 14
    }                                                                                                                  // 15
                                                                                                                       //
    return ret.join('&');                                                                                              // 17
};                                                                                                                     // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/lib/index.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./remoteGetValue.js"));                                                                          // 1
module.watch(require("./encodeQueryData.js"));                                                                         // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"parseFloatArray.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/lib/parseFloatArray.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
    parseFloatArray: function () {                                                                                     // 1
        return parseFloatArray;                                                                                        // 1
    }                                                                                                                  // 1
});                                                                                                                    // 1
                                                                                                                       //
var parseFloatArray = function (obj) {                                                                                 // 1
    var result = [];                                                                                                   // 2
                                                                                                                       //
    if (!obj) {                                                                                                        // 4
        return result;                                                                                                 // 5
    }                                                                                                                  // 6
                                                                                                                       //
    var objs = obj.split("\\");                                                                                        // 8
                                                                                                                       //
    for (var i = 0; i < objs.length; i++) {                                                                            // 9
        result.push(parseFloat(objs[i]));                                                                              // 10
    }                                                                                                                  // 11
                                                                                                                       //
    return result;                                                                                                     // 13
};                                                                                                                     // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"remoteGetValue.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/lib/remoteGetValue.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  remoteGetValue: function () {                                                                                        // 1
    return remoteGetValue;                                                                                             // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
                                                                                                                       //
var remoteGetValue = function (obj) {                                                                                  // 1
  return obj ? obj.Value : null;                                                                                       // 2
};                                                                                                                     // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"methods":{"getStudyMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/methods/getStudyMetadata.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var OHIF = void 0;                                                                                                     // 1
module.watch(require("meteor/ohif:core"), {                                                                            // 1
    OHIF: function (v) {                                                                                               // 1
        OHIF = v;                                                                                                      // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
Meteor.methods({                                                                                                       // 4
    /**                                                                                                                // 5
     * Retrieves Study metadata given a Study Instance UID                                                             //
     * This Meteor method is available from both the client and the server                                             //
     */GetStudyMetadata: function (studyInstanceUid) {                                                                 //
        OHIF.log.info('GetStudyMetadata(%s)', studyInstanceUid); // Get the server data. This is user-defined in the config.json files or through servers
        // configuration modal                                                                                         // 13
                                                                                                                       //
        var server = OHIF.servers.getCurrentServer();                                                                  // 14
                                                                                                                       //
        if (!server) {                                                                                                 // 16
            throw 'No properly configured server was available over DICOMWeb or DIMSE.';                               // 17
        }                                                                                                              // 18
                                                                                                                       //
        if (server.type === 'dicomWeb') {                                                                              // 20
            return Services.WADO.RetrieveMetadata(server, studyInstanceUid);                                           // 21
        } else if (server.type === 'dimse') {                                                                          // 22
            return Services.DIMSE.RetrieveMetadata(studyInstanceUid);                                                  // 23
        }                                                                                                              // 24
    }                                                                                                                  // 25
});                                                                                                                    // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"importStudies.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/methods/importStudies.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var OHIF = void 0;                                                                                                     // 1
module.watch(require("meteor/ohif:core"), {                                                                            // 1
    OHIF: function (v) {                                                                                               // 1
        OHIF = v;                                                                                                      // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
                                                                                                                       //
var fs = Npm.require('fs');                                                                                            // 4
                                                                                                                       //
var fiber = Npm.require('fibers');                                                                                     // 5
                                                                                                                       //
WebApp.connectHandlers.use('/uploadFilesToImport', function (req, res) {                                               // 7
    if (!req.headers.filename) {                                                                                       // 8
        //  Response: BAD REQUEST (400)                                                                                // 9
        res.statusCode = 400;                                                                                          // 10
        res.end();                                                                                                     // 11
    } //  Store files in temp location (they will be deleted when their import operations are completed)               // 12
                                                                                                                       //
                                                                                                                       //
    var dicomDir = '/tmp/dicomDir';                                                                                    // 15
    createFolderIfNotExist(dicomDir);                                                                                  // 16
    var fullFileName = dicomDir + '/' + req.headers.filename;                                                          // 18
    var file = fs.createWriteStream(fullFileName);                                                                     // 19
    file.on('error', function (error) {                                                                                // 21
        OHIF.log.warn(error); //  Response: INTERNAL SERVER ERROR (500)                                                // 22
                                                                                                                       //
        res.statusCode = 400;                                                                                          // 24
        res.end();                                                                                                     // 25
    });                                                                                                                // 26
    file.on('finish', function () {                                                                                    // 27
        //  Response: SUCCESS (200)                                                                                    // 28
        res.writeHead(200, {                                                                                           // 29
            'Content-Type': 'text/plain'                                                                               // 29
        });                                                                                                            // 29
        res.end(fullFileName);                                                                                         // 30
    }); //  Pipe the request to the file                                                                               // 31
                                                                                                                       //
    req.pipe(file);                                                                                                    // 34
});                                                                                                                    // 35
Meteor.methods({                                                                                                       // 37
    /**                                                                                                                // 38
     * Returns true if import is supported for default service type                                                    //
     * @returns {boolean}                                                                                              //
     */importSupported: function () {                                                                                  //
        var server = OHIF.servers.getCurrentServer();                                                                  // 43
                                                                                                                       //
        if (server && server.type === 'dimse') {                                                                       // 44
            return true;                                                                                               // 45
        }                                                                                                              // 46
    },                                                                                                                 // 47
    /**                                                                                                                // 48
     * Imports studies from local into study list                                                                      //
     * @param studiesToImport Studies to import                                                                        //
     * @param studyImportStatusId Study import status collection id to track import status                             //
     */importStudies: function (studiesToImport, studyImportStatusId) {                                                //
        if (!studiesToImport || !studyImportStatusId) {                                                                // 54
            return;                                                                                                    // 55
        }                                                                                                              // 56
                                                                                                                       //
        var server = OHIF.servers.getCurrentServer();                                                                  // 58
                                                                                                                       //
        if (!server) {                                                                                                 // 60
            throw 'No properly configured server was available over DICOMWeb or DIMSE.';                               // 61
        }                                                                                                              // 62
                                                                                                                       //
        if (server.type === 'dicomWeb') {                                                                              // 64
            //TODO: Support importing studies into dicomWeb                                                            // 65
            OHIF.log.warn('Importing studies into dicomWeb is currently not supported.');                              // 66
        } else if (server.type === 'dimse') {                                                                          // 67
            importStudiesDIMSE(studiesToImport, studyImportStatusId);                                                  // 68
        }                                                                                                              // 69
    },                                                                                                                 // 70
    /**                                                                                                                // 71
     * Create a new study import status item and insert it into the collection to track import status                  //
     * @returns {studyImportStatusId: string}                                                                          //
     */createStudyImportStatus: function () {                                                                          //
        var studyImportStatus = {                                                                                      // 76
            numberOfStudiesImported: 0,                                                                                // 77
            numberOfStudiesFailed: 0                                                                                   // 78
        };                                                                                                             // 76
        return OHIF.studylist.collections.StudyImportStatus.insert(studyImportStatus);                                 // 80
    },                                                                                                                 // 81
    /**                                                                                                                // 82
     * Remove the study import status item from the collection                                                         //
     * @param id Collection id of the study import status in the collection                                            //
     */removeStudyImportStatus: function (id) {                                                                        //
        OHIF.studylist.collections.StudyImportStatus.remove(id);                                                       // 87
    }                                                                                                                  // 88
});                                                                                                                    // 37
                                                                                                                       //
function importStudiesDIMSE(studiesToImport, studyImportStatusId) {                                                    // 91
    if (!studiesToImport || !studyImportStatusId) {                                                                    // 92
        return;                                                                                                        // 93
    } //  Perform C-Store to import studies and handle the callbacks to update import status                           // 94
                                                                                                                       //
                                                                                                                       //
    DIMSE.storeInstances(studiesToImport, function (err, file) {                                                       // 96
        try {                                                                                                          // 97
            //  Use fiber to be able to modify meteor collection in callback                                           // 98
            fiber(function () {                                                                                        // 99
                try {                                                                                                  // 100
                    //  Update the import status                                                                       // 101
                    if (err) {                                                                                         // 102
                        OHIF.studylist.collections.StudyImportStatus.update({                                          // 103
                            _id: studyImportStatusId                                                                   // 104
                        }, {                                                                                           // 104
                            $inc: {                                                                                    // 105
                                numberOfStudiesFailed: 1                                                               // 105
                            }                                                                                          // 105
                        });                                                                                            // 105
                        OHIF.log.warn('Failed to import study via DIMSE: ', file, err);                                // 107
                    } else {                                                                                           // 108
                        OHIF.studylist.collections.StudyImportStatus.update({                                          // 109
                            _id: studyImportStatusId                                                                   // 110
                        }, {                                                                                           // 110
                            $inc: {                                                                                    // 111
                                numberOfStudiesImported: 1                                                             // 111
                            }                                                                                          // 111
                        });                                                                                            // 111
                        OHIF.log.info('Study successfully imported via DIMSE: ', file);                                // 113
                    }                                                                                                  // 114
                } catch (error) {                                                                                      // 116
                    OHIF.studylist.collections.StudyImportStatus.update({                                              // 117
                        _id: studyImportStatusId                                                                       // 118
                    }, {                                                                                               // 118
                        $inc: {                                                                                        // 119
                            numberOfStudiesFailed: 1                                                                   // 119
                        }                                                                                              // 119
                    });                                                                                                // 119
                    OHIF.log.warn('Failed to import study via DIMSE: ', file, error);                                  // 121
                } finally {                                                                                            // 122
                    //  The import operation of this file is completed, so delete it if still exists                   // 123
                    if (fileExists(file)) {                                                                            // 124
                        fs.unlink(file);                                                                               // 125
                    }                                                                                                  // 126
                }                                                                                                      // 127
            }).run();                                                                                                  // 129
        } catch (error) {                                                                                              // 130
            OHIF.studylist.collections.StudyImportStatus.update({                                                      // 131
                _id: studyImportStatusId                                                                               // 132
            }, {                                                                                                       // 132
                $inc: {                                                                                                // 133
                    numberOfStudiesFailed: 1                                                                           // 133
                }                                                                                                      // 133
            });                                                                                                        // 133
            OHIF.log.warn('Failed to import study via DIMSE: ', file, error);                                          // 135
        }                                                                                                              // 136
    });                                                                                                                // 138
}                                                                                                                      // 139
                                                                                                                       //
function createFolderIfNotExist(folder) {                                                                              // 141
    var folderParts = folder.split('/');                                                                               // 142
    var folderPart = folderParts[0];                                                                                   // 143
                                                                                                                       //
    for (var i = 1; i < folderParts.length; i++) {                                                                     // 144
        folderPart += '/' + folderParts[i];                                                                            // 145
                                                                                                                       //
        if (!folderExists(folderPart)) {                                                                               // 146
            fs.mkdirSync(folderPart);                                                                                  // 147
        }                                                                                                              // 148
    }                                                                                                                  // 149
}                                                                                                                      // 150
                                                                                                                       //
function fileExists(folder) {                                                                                          // 152
    try {                                                                                                              // 153
        return fs.statSync(folder).isFile();                                                                           // 154
    } catch (err) {                                                                                                    // 155
        return false;                                                                                                  // 156
    }                                                                                                                  // 157
}                                                                                                                      // 158
                                                                                                                       //
function folderExists(folder) {                                                                                        // 160
    try {                                                                                                              // 161
        return fs.statSync(folder).isDirectory();                                                                      // 162
    } catch (err) {                                                                                                    // 163
        return false;                                                                                                  // 164
    }                                                                                                                  // 165
}                                                                                                                      // 166
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/methods/index.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./getStudyMetadata.js"));                                                                        // 1
module.watch(require("./importStudies.js"));                                                                           // 1
module.watch(require("./studylistSearch.js"));                                                                         // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylistSearch.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/methods/studylistSearch.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var OHIF = void 0;                                                                                                     // 1
module.watch(require("meteor/ohif:core"), {                                                                            // 1
    OHIF: function (v) {                                                                                               // 1
        OHIF = v;                                                                                                      // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
Meteor.methods({                                                                                                       // 4
    /**                                                                                                                // 5
     * Use the specified filter to conduct a search from the DICOM server                                              //
     *                                                                                                                 //
     * @param filter                                                                                                   //
     */StudyListSearch: function (filter) {                                                                            //
        // Get the server data. This is user-defined in the config.json files or through servers                       // 11
        // configuration modal                                                                                         // 12
        var server = OHIF.servers.getCurrentServer();                                                                  // 13
                                                                                                                       //
        if (!server) {                                                                                                 // 15
            throw 'No properly configured server was available over DICOMWeb or DIMSE.';                               // 16
        }                                                                                                              // 17
                                                                                                                       //
        if (server.type === 'dicomWeb') {                                                                              // 19
            return Services.QIDO.Studies(server, filter);                                                              // 20
        } else if (server.type === 'dimse') {                                                                          // 21
            return Services.DIMSE.Studies(filter);                                                                     // 22
        }                                                                                                              // 23
    }                                                                                                                  // 24
});                                                                                                                    // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"services":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/index.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./namespace.js"));                                                                               // 1
module.watch(require("./qido/instances.js"));                                                                          // 1
module.watch(require("./qido/studies.js"));                                                                            // 1
module.watch(require("./wado/retrieveMetadata.js"));                                                                   // 1
module.watch(require("./dimse/instances.js"));                                                                         // 1
module.watch(require("./dimse/studies.js"));                                                                           // 1
module.watch(require("./dimse/retrieveMetadata.js"));                                                                  // 1
module.watch(require("./dimse/setup.js"));                                                                             // 1
module.watch(require("./remote/instances.js"));                                                                        // 1
module.watch(require("./remote/studies.js"));                                                                          // 1
module.watch(require("./remote/retrieveMetadata.js"));                                                                 // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"namespace.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/namespace.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Services = {};                                                                                                         // 1
Services.QIDO = {};                                                                                                    // 2
Services.WADO = {};                                                                                                    // 3
Services.DIMSE = {};                                                                                                   // 4
Services.REMOTE = {};                                                                                                  // 5
                                                                                                                       //
remoteGetValue = function (obj) {                                                                                      // 7
  return obj ? obj.Value : null;                                                                                       // 8
};                                                                                                                     // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dimse":{"instances.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/dimse/instances.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF = void 0;                                                                                                     // 1
module.watch(require("meteor/ohif:core"), {                                                                            // 1
    OHIF: function (v) {                                                                                               // 1
        OHIF = v;                                                                                                      // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
/**                                                                                                                    // 3
 * Parses data returned from a study search and transforms it into                                                     //
 * an array of series that are present in the study                                                                    //
 *                                                                                                                     //
 * @param resultData                                                                                                   //
 * @returns {Array} Series List                                                                                        //
 */function resultDataToStudyMetadata(resultData, studyInstanceUid) {                                                  //
    var seriesMap = {};                                                                                                // 11
    var seriesList = [];                                                                                               // 12
    resultData.forEach(function (instanceRaw) {                                                                        // 14
        var instance = instanceRaw.toObject(); // Use seriesMap to cache series data                                   // 15
        // If the series instance UID has already been used to                                                         // 17
        // process series data, continue using that series                                                             // 18
                                                                                                                       //
        var seriesInstanceUid = instance[0x0020000E];                                                                  // 19
        var series = seriesMap[seriesInstanceUid]; // If no series data exists in the seriesMap cache variable,        // 20
        // process any available series data                                                                           // 23
                                                                                                                       //
        if (!series) {                                                                                                 // 24
            series = {                                                                                                 // 25
                seriesInstanceUid: seriesInstanceUid,                                                                  // 26
                seriesNumber: instance[0x00200011],                                                                    // 27
                instances: []                                                                                          // 28
            }; // Save this data in the seriesMap cache variable                                                       // 25
                                                                                                                       //
            seriesMap[seriesInstanceUid] = series;                                                                     // 32
            seriesList.push(series);                                                                                   // 33
        } // TODO: Check which peer it should point to                                                                 // 34
                                                                                                                       //
                                                                                                                       //
        var server = OHIF.servers.getCurrentServer().peers[0];                                                         // 37
        var serverRoot = server.host + ':' + server.port;                                                              // 39
        var sopInstanceUid = instance[0x00080018];                                                                     // 41
        var uri = serverRoot + '/studies/' + studyInstanceUid + '/series/' + seriesInstanceUid + '/instances/' + sopInstanceUid + '/frames/1'; // Add this instance to the current series
                                                                                                                       //
        series.instances.push({                                                                                        // 45
            sopClassUid: instance[0x00080016],                                                                         // 46
            sopInstanceUid: sopInstanceUid,                                                                            // 47
            uri: uri,                                                                                                  // 48
            instanceNumber: instance[0x00200013]                                                                       // 49
        });                                                                                                            // 45
    });                                                                                                                // 51
    return seriesList;                                                                                                 // 52
} /**                                                                                                                  // 53
   * Retrieve a set of instances using a DIMSE call                                                                    //
   * @param studyInstanceUid                                                                                           //
   * @returns {{wadoUriRoot: String, studyInstanceUid: String, seriesList: Array}}                                     //
   */                                                                                                                  //
                                                                                                                       //
Services.DIMSE.Instances = function (studyInstanceUid) {                                                               // 60
    //var url = buildUrl(server, studyInstanceUid);                                                                    // 61
    var result = DIMSE.retrieveInstances(studyInstanceUid);                                                            // 62
    return {                                                                                                           // 64
        studyInstanceUid: studyInstanceUid,                                                                            // 65
        seriesList: resultDataToStudyMetadata(result, studyInstanceUid)                                                // 66
    };                                                                                                                 // 64
};                                                                                                                     // 68
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"retrieveMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/dimse/retrieveMetadata.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF = void 0;                                                                                                     // 1
module.watch(require("meteor/ohif:core"), {                                                                            // 1
    OHIF: function (v) {                                                                                               // 1
        OHIF = v;                                                                                                      // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var parseFloatArray = void 0;                                                                                          // 1
module.watch(require("meteor/ohif:study-list/server/lib/parseFloatArray"), {                                           // 1
    parseFloatArray: function (v) {                                                                                    // 1
        parseFloatArray = v;                                                                                           // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
                                                                                                                       //
/**                                                                                                                    // 4
 * Returns the value of the element (e.g. '00280009')                                                                  //
 *                                                                                                                     //
 * @param element - The group/element of the element (e.g. '00280009')                                                 //
 * @param defaultValue - The default value to return if the element does not exist                                     //
 * @returns {*}                                                                                                        //
 */function getValue(element, defaultValue) {                                                                          //
    if (!element || !element.value) {                                                                                  // 12
        return defaultValue;                                                                                           // 13
    }                                                                                                                  // 14
                                                                                                                       //
    return element.value;                                                                                              // 16
} /**                                                                                                                  // 17
   * Parses the SourceImageSequence, if it exists, in order                                                            //
   * to return a ReferenceSOPInstanceUID. The ReferenceSOPInstanceUID                                                  //
   * is used to refer to this image in any accompanying DICOM-SR documents.                                            //
   *                                                                                                                   //
   * @param instance                                                                                                   //
   * @returns {String} The ReferenceSOPInstanceUID                                                                     //
   */                                                                                                                  //
                                                                                                                       //
function getSourceImageInstanceUid(instance) {                                                                         // 27
    // TODO= Parse the whole Source Image Sequence                                                                     // 28
    // This is a really poor workaround for now.                                                                       // 29
    // Later we should probably parse the whole sequence.                                                              // 30
    var SourceImageSequence = instance[0x00082112];                                                                    // 31
                                                                                                                       //
    if (SourceImageSequence && SourceImageSequence.length) {                                                           // 32
        return SourceImageSequence[0][0x00081155];                                                                     // 33
    }                                                                                                                  // 34
} /**                                                                                                                  // 35
   * Parses result data from a DIMSE search into Study MetaData                                                        //
   * Returns an object populated with study metadata, including the                                                    //
   * series list.                                                                                                      //
   *                                                                                                                   //
   * @param studyInstanceUid                                                                                           //
   * @param resultData                                                                                                 //
   * @returns {{seriesList: Array, patientName: *, patientId: *, accessionNumber: *, studyDate: *, modalities: *, studyDescription: *, imageCount: *, studyInstanceUid: *}}
   */                                                                                                                  //
                                                                                                                       //
function resultDataToStudyMetadata(studyInstanceUid, resultData) {                                                     // 46
    OHIF.log.info('resultDataToStudyMetadata');                                                                        // 47
    var seriesMap = {};                                                                                                // 48
    var seriesList = [];                                                                                               // 49
                                                                                                                       //
    if (!resultData.length) {                                                                                          // 51
        return;                                                                                                        // 52
    }                                                                                                                  // 53
                                                                                                                       //
    var anInstance = resultData[0].toObject();                                                                         // 55
                                                                                                                       //
    if (!anInstance) {                                                                                                 // 56
        return;                                                                                                        // 57
    }                                                                                                                  // 58
                                                                                                                       //
    var studyData = {                                                                                                  // 60
        seriesList: seriesList,                                                                                        // 61
        patientName: anInstance[0x00100010],                                                                           // 62
        patientId: anInstance[0x00100020],                                                                             // 63
        patientBirthDate: anInstance[0x00100030],                                                                      // 64
        patientSex: anInstance[0x00100040],                                                                            // 65
        accessionNumber: anInstance[0x00080050],                                                                       // 66
        studyDate: anInstance[0x00080020],                                                                             // 67
        modalities: anInstance[0x00080061],                                                                            // 68
        studyDescription: anInstance[0x00081030],                                                                      // 69
        imageCount: anInstance[0x00201208],                                                                            // 70
        studyInstanceUid: anInstance[0x0020000D],                                                                      // 71
        institutionName: anInstance[0x00080080]                                                                        // 72
    };                                                                                                                 // 60
    resultData.forEach(function (instanceRaw) {                                                                        // 75
        var instance = instanceRaw.toObject();                                                                         // 76
        var seriesInstanceUid = instance[0x0020000E];                                                                  // 77
        var series = seriesMap[seriesInstanceUid];                                                                     // 78
                                                                                                                       //
        if (!series) {                                                                                                 // 79
            series = {                                                                                                 // 80
                seriesDescription: instance[0x0008103E],                                                               // 81
                modality: instance[0x00080060],                                                                        // 82
                seriesInstanceUid: seriesInstanceUid,                                                                  // 83
                seriesNumber: parseFloat(instance[0x00200011]),                                                        // 84
                instances: []                                                                                          // 85
            };                                                                                                         // 80
            seriesMap[seriesInstanceUid] = series;                                                                     // 87
            seriesList.push(series);                                                                                   // 88
        }                                                                                                              // 89
                                                                                                                       //
        var sopInstanceUid = instance[0x00080018];                                                                     // 91
        var instanceSummary = {                                                                                        // 93
            imageType: instance[0x00080008],                                                                           // 94
            sopClassUid: instance[0x00080016],                                                                         // 95
            modality: instance[0x00080060],                                                                            // 96
            sopInstanceUid: sopInstanceUid,                                                                            // 97
            instanceNumber: parseFloat(instance[0x00200013]),                                                          // 98
            imagePositionPatient: instance[0x00200032],                                                                // 99
            imageOrientationPatient: instance[0x00200037],                                                             // 100
            frameOfReferenceUID: instance[0x00200052],                                                                 // 101
            sliceThickness: parseFloat(instance[0x00180050]),                                                          // 102
            sliceLocation: parseFloat(instance[0x00201041]),                                                           // 103
            tablePosition: parseFloat(instance[0x00189327]),                                                           // 104
            samplesPerPixel: parseFloat(instance[0x00280002]),                                                         // 105
            photometricInterpretation: instance[0x00280004],                                                           // 106
            planarConfiguration: parseFloat(instance[0x00280006]),                                                     // 107
            rows: parseFloat(instance[0x00280010]),                                                                    // 108
            columns: parseFloat(instance[0x00280011]),                                                                 // 109
            pixelSpacing: instance[0x00280030],                                                                        // 110
            bitsAllocated: parseFloat(instance[0x00280100]),                                                           // 111
            bitsStored: parseFloat(instance[0x00280101]),                                                              // 112
            highBit: parseFloat(instance[0x00280102]),                                                                 // 113
            pixelRepresentation: parseFloat(instance[0x00280103]),                                                     // 114
            windowCenter: instance[0x00281050],                                                                        // 115
            windowWidth: instance[0x00281051],                                                                         // 116
            rescaleIntercept: parseFloat(instance[0x00281052]),                                                        // 117
            rescaleSlope: parseFloat(instance[0x00281053]),                                                            // 118
            sourceImageInstanceUid: getSourceImageInstanceUid(instance),                                               // 119
            laterality: instance[0x00200062],                                                                          // 120
            viewPosition: instance[0x00185101],                                                                        // 121
            acquisitionDateTime: instance[0x0008002A],                                                                 // 122
            numberOfFrames: parseFloat(instance[0x00280008]),                                                          // 123
            frameIncrementPointer: getValue(instance[0x00280009]),                                                     // 124
            frameTime: parseFloat(instance[0x00181063]),                                                               // 125
            frameTimeVector: parseFloatArray(instance[0x00181065]),                                                    // 126
            lossyImageCompression: instance[0x00282110],                                                               // 127
            derivationDescription: instance[0x00282111],                                                               // 128
            lossyImageCompressionRatio: instance[0x00282112],                                                          // 129
            lossyImageCompressionMethod: instance[0x00282114],                                                         // 130
            spacingBetweenSlices: instance[0x00180088],                                                                // 131
            echoNumber: instance[0x00180086],                                                                          // 132
            contrastBolusAgent: instance[0x00180010]                                                                   // 133
        }; // Retrieve the actual data over WADO-URI                                                                   // 93
                                                                                                                       //
        var server = OHIF.servers.getCurrentServer();                                                                  // 137
        var wadouri = server.wadoUriRoot + "?requestType=WADO&studyUID=" + studyInstanceUid + "&seriesUID=" + seriesInstanceUid + "&objectUID=" + sopInstanceUid + "&contentType=application%2Fdicom";
        instanceSummary.wadouri = WADOProxy.convertURL(wadouri, server);                                               // 139
        series.instances.push(instanceSummary);                                                                        // 141
    });                                                                                                                // 142
    studyData.studyInstanceUid = studyInstanceUid;                                                                     // 144
    return studyData;                                                                                                  // 146
} /**                                                                                                                  // 147
   * Retrieved Study MetaData from a DICOM server using DIMSE                                                          //
   * @param studyInstanceUid                                                                                           //
   * @returns {{seriesList: Array, patientName: *, patientId: *, accessionNumber: *, studyDate: *, modalities: *, studyDescription: *, imageCount: *, studyInstanceUid: *}}
   */                                                                                                                  //
                                                                                                                       //
Services.DIMSE.RetrieveMetadata = function (studyInstanceUid) {                                                        // 154
    // TODO: Check which peer it should point to                                                                       // 155
    var activeServer = OHIF.servers.getCurrentServer().peers[0];                                                       // 156
    var supportsInstanceRetrievalByStudyUid = activeServer.supportsInstanceRetrievalByStudyUid;                        // 157
    var results = void 0; // Check explicitly for a value of false, since this property                                // 158
    // may be left undefined in config files                                                                           // 161
                                                                                                                       //
    if (supportsInstanceRetrievalByStudyUid === false) {                                                               // 162
        results = DIMSE.retrieveInstancesByStudyOnly(studyInstanceUid);                                                // 163
    } else {                                                                                                           // 164
        results = DIMSE.retrieveInstances(studyInstanceUid);                                                           // 165
    }                                                                                                                  // 166
                                                                                                                       //
    return resultDataToStudyMetadata(studyInstanceUid, results);                                                       // 168
};                                                                                                                     // 169
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"setup.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/dimse/setup.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
    Meteor: function (v) {                                                                                             // 1
        Meteor = v;                                                                                                    // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var OHIF = void 0;                                                                                                     // 1
module.watch(require("meteor/ohif:core"), {                                                                            // 1
    OHIF: function (v) {                                                                                               // 1
        OHIF = v;                                                                                                      // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
var CurrentServer = void 0;                                                                                            // 1
module.watch(require("meteor/ohif:servers/both/collections"), {                                                        // 1
    CurrentServer: function (v) {                                                                                      // 1
        CurrentServer = v;                                                                                             // 1
    }                                                                                                                  // 1
}, 2);                                                                                                                 // 1
                                                                                                                       //
var setupDIMSE = function () {                                                                                         // 5
    // Terminate existing DIMSE servers and sockets and clean up the connection object                                 // 6
    DIMSE.connection.reset(); // Get the new server configuration                                                      // 7
                                                                                                                       //
    var server = OHIF.servers.getCurrentServer(); // Stop here if the new server is not of DIMSE type                  // 10
                                                                                                                       //
    if (server.type !== 'dimse') {                                                                                     // 13
        return;                                                                                                        // 14
    } // Check if peers were defined in the server configuration and throw an error if not                             // 15
                                                                                                                       //
                                                                                                                       //
    var peers = server.peers;                                                                                          // 18
                                                                                                                       //
    if (!peers || !peers.length) {                                                                                     // 19
        OHIF.log.error('dimse-config: ' + 'No DIMSE Peers provided.');                                                 // 20
        throw new Meteor.Error('dimse-config', 'No DIMSE Peers provided.');                                            // 21
    } // Add all the DIMSE peers, establishing the connections                                                         // 22
                                                                                                                       //
                                                                                                                       //
    OHIF.log.info('Adding DIMSE peers');                                                                               // 25
                                                                                                                       //
    try {                                                                                                              // 26
        peers.forEach(function (peer) {                                                                                // 27
            return DIMSE.connection.addPeer(peer);                                                                     // 27
        });                                                                                                            // 27
    } catch (error) {                                                                                                  // 28
        OHIF.log.error('dimse-addPeers: ' + error);                                                                    // 29
        throw new Meteor.Error('dimse-addPeers', error);                                                               // 30
    }                                                                                                                  // 31
}; // Setup the DIMSE connections on startup or when the current server is changed                                     // 32
                                                                                                                       //
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 35
    CurrentServer.find().observe({                                                                                     // 36
        added: setupDIMSE,                                                                                             // 37
        changed: setupDIMSE                                                                                            // 38
    });                                                                                                                // 36
});                                                                                                                    // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studies.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/dimse/studies.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF = void 0;                                                                                                     // 1
module.watch(require("meteor/ohif:core"), {                                                                            // 1
    OHIF: function (v) {                                                                                               // 1
        OHIF = v;                                                                                                      // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
/**                                                                                                                    // 3
 * Parses resulting data from a QIDO call into a set of Study MetaData                                                 //
 *                                                                                                                     //
 * @param resultData                                                                                                   //
 * @returns {Array} An array of Study MetaData objects                                                                 //
 */function resultDataToStudies(resultData) {                                                                          //
    var studies = [];                                                                                                  // 10
    resultData.forEach(function (studyRaw) {                                                                           // 12
        var study = studyRaw.toObject();                                                                               // 13
        studies.push({                                                                                                 // 14
            studyInstanceUid: study[0x0020000D],                                                                       // 15
            // 00080005 = SpecificCharacterSet                                                                         // 16
            studyDate: study[0x00080020],                                                                              // 17
            studyTime: study[0x00080030],                                                                              // 18
            accessionNumber: study[0x00080050],                                                                        // 19
            referringPhysicianName: study[0x00080090],                                                                 // 20
            // 00081190 = URL                                                                                          // 21
            patientName: study[0x00100010],                                                                            // 22
            patientId: study[0x00100020],                                                                              // 23
            patientBirthdate: study[0x00100030],                                                                       // 24
            patientSex: study[0x00100040],                                                                             // 25
            imageCount: study[0x00201208],                                                                             // 26
            studyId: study[0x00200010],                                                                                // 27
            studyDescription: study[0x00081030],                                                                       // 28
            modalities: study[0x00080061]                                                                              // 29
        });                                                                                                            // 14
    });                                                                                                                // 31
    return studies;                                                                                                    // 32
}                                                                                                                      // 33
                                                                                                                       //
Services.DIMSE.Studies = function (filter) {                                                                           // 35
    OHIF.log.info('Services.DIMSE.Studies');                                                                           // 36
    var filterStudyDate = '';                                                                                          // 38
                                                                                                                       //
    if (filter.studyDateFrom && filter.studyDateTo) {                                                                  // 39
        var convertDate = function (date) {                                                                            // 40
            return moment(date, 'MM/DD/YYYY').format('YYYYMMDD');                                                      // 40
        };                                                                                                             // 40
                                                                                                                       //
        var dateFrom = convertDate(filter.studyDateFrom);                                                              // 41
        var dateTo = convertDate(filter.studyDateTo);                                                                  // 42
        filterStudyDate = dateFrom + "-" + dateTo;                                                                     // 43
    }                                                                                                                  // 44
                                                                                                                       //
    var parameters = {                                                                                                 // 46
        0x00100010: filter.patientName,                                                                                // 47
        0x00100020: filter.patientId,                                                                                  // 48
        0x00080050: filter.accessionNumber,                                                                            // 49
        0x00080020: filterStudyDate,                                                                                   // 50
        0x00081030: filter.studyDescription,                                                                           // 51
        0x00100040: '',                                                                                                // 52
        0x00201208: '',                                                                                                // 53
        0x00080061: filter.modalitiesInStudy                                                                           // 54
    };                                                                                                                 // 46
    var results = DIMSE.retrieveStudies(parameters);                                                                   // 57
    return resultDataToStudies(results);                                                                               // 58
};                                                                                                                     // 59
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"qido":{"instances.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/qido/instances.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * Creates a QIDO URL given the server settings and a study instance UID                                               //
 * @param server                                                                                                       //
 * @param studyInstanceUid                                                                                             //
 * @returns {string} URL to be used for QIDO calls                                                                     //
 */function buildUrl(server, studyInstanceUid) {                                                                       //
    return server.qidoRoot + '/studies/' + studyInstanceUid + '/instances';                                            // 8
} /**                                                                                                                  // 9
   * Parses data returned from a QIDO search and transforms it into                                                    //
   * an array of series that are present in the study                                                                  //
   *                                                                                                                   //
   * @param server The DICOM server                                                                                    //
   * @param studyInstanceUid                                                                                           //
   * @param resultData                                                                                                 //
   * @returns {Array} Series List                                                                                      //
   */                                                                                                                  //
                                                                                                                       //
function resultDataToStudyMetadata(server, studyInstanceUid, resultData) {                                             // 20
    var seriesMap = {};                                                                                                // 21
    var seriesList = [];                                                                                               // 22
    resultData.forEach(function (instance) {                                                                           // 24
        // Use seriesMap to cache series data                                                                          // 25
        // If the series instance UID has already been used to                                                         // 26
        // process series data, continue using that series                                                             // 27
        var seriesInstanceUid = DICOMWeb.getString(instance['0020000E']);                                              // 28
        var series = seriesMap[seriesInstanceUid]; // If no series data exists in the seriesMap cache variable,        // 29
        // process any available series data                                                                           // 32
                                                                                                                       //
        if (!series) {                                                                                                 // 33
            series = {                                                                                                 // 34
                seriesInstanceUid: seriesInstanceUid,                                                                  // 35
                seriesNumber: DICOMWeb.getString(instance['00200011']),                                                // 36
                instances: []                                                                                          // 37
            }; // Save this data in the seriesMap cache variable                                                       // 34
                                                                                                                       //
            seriesMap[seriesInstanceUid] = series;                                                                     // 41
            seriesList.push(series);                                                                                   // 42
        } // The uri for the dicomweb                                                                                  // 43
        // NOTE: DCM4CHEE seems to return the data zipped                                                              // 46
        // NOTE: Orthanc returns the data with multi-part mime which cornerstoneWADOImageLoader doesn't                // 47
        //       know how to parse yet                                                                                 // 48
        //var uri = DICOMWeb.getString(instance['00081190']);                                                          // 49
        //uri = uri.replace('wado-rs', 'dicom-web');                                                                   // 50
        // manually create a WADO-URI from the UIDs                                                                    // 52
        // NOTE: Haven't been able to get Orthanc's WADO-URI to work yet - maybe its not configured?                   // 53
                                                                                                                       //
                                                                                                                       //
        var sopInstanceUid = DICOMWeb.getString(instance['00080018']);                                                 // 54
        var uri = server.wadoUriRoot + '?requestType=WADO&studyUID=' + studyInstanceUid + '&seriesUID=' + seriesInstanceUid + '&objectUID=' + sopInstanceUid + '&contentType=application%2Fdicom'; // Add this instance to the current series
                                                                                                                       //
        series.instances.push({                                                                                        // 58
            sopClassUid: DICOMWeb.getString(instance['00080016']),                                                     // 59
            sopInstanceUid: sopInstanceUid,                                                                            // 60
            uri: uri,                                                                                                  // 61
            instanceNumber: DICOMWeb.getString(instance['00200013'])                                                   // 62
        });                                                                                                            // 58
    });                                                                                                                // 64
    return seriesList;                                                                                                 // 65
} /**                                                                                                                  // 66
   * Retrieve a set of instances using a QIDO call                                                                     //
   * @param server                                                                                                     //
   * @param studyInstanceUid                                                                                           //
   * @returns {{wadoUriRoot: String, studyInstanceUid: String, seriesList: Array}}                                     //
   */                                                                                                                  //
                                                                                                                       //
Services.QIDO.Instances = function (server, studyInstanceUid) {                                                        // 74
    var url = buildUrl(server, studyInstanceUid);                                                                      // 75
    var result = DICOMWeb.getJSON(url, server.requestOptions);                                                         // 76
    return {                                                                                                           // 78
        wadoUriRoot: server.wadoUriRoot,                                                                               // 79
        studyInstanceUid: studyInstanceUid,                                                                            // 80
        seriesList: resultDataToStudyMetadata(server, studyInstanceUid, result.data)                                   // 81
    };                                                                                                                 // 78
};                                                                                                                     // 83
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studies.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/qido/studies.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * Creates a QIDO date string for a date range query                                                                   //
 * Assumes the year is positive, at most 4 digits long.                                                                //
 *                                                                                                                     //
 * @param date The Date object to be formatted                                                                         //
 * @returns {string} The formatted date string                                                                         //
 */function dateToString(date) {                                                                                       //
    if (!date) return "";                                                                                              // 9
    var year = date.getFullYear().toString();                                                                          // 10
    var month = (date.getMonth() + 1).toString();                                                                      // 11
    var day = date.getDate().toString();                                                                               // 12
    year = "0".repeat(4 - year.length).concat(year);                                                                   // 13
    month = "0".repeat(2 - month.length).concat(month);                                                                // 14
    day = "0".repeat(2 - day.length).concat(day);                                                                      // 15
    return "".concat(year, month, day);                                                                                // 16
} /**                                                                                                                  // 17
   * Produces a QIDO URL given server details and a set of specified search filter                                     //
   * items                                                                                                             //
   *                                                                                                                   //
   * @param server                                                                                                     //
   * @param filter                                                                                                     //
   * @returns {string} The URL with encoded filter query data                                                          //
   */                                                                                                                  //
                                                                                                                       //
function filterToQIDOURL(server, filter) {                                                                             // 27
    var commaSeparatedFields = ['00081030', // Study Description                                                       // 28
    '00080060' //Modality                                                                                              // 30
    // Add more fields here if you want them in the Study List                                                         // 31
    ].join(',');                                                                                                       // 28
    var parameters = {                                                                                                 // 34
        PatientName: filter.patientName,                                                                               // 35
        PatientID: filter.patientId,                                                                                   // 36
        AccessionNumber: filter.accessionNumber,                                                                       // 37
        StudyDescription: filter.studyDescription,                                                                     // 38
        ModalitiesInStudy: filter.modalitiesInStudy,                                                                   // 39
        limit: filter.limit,                                                                                           // 40
        includefield: server.qidoSupportsIncludeField ? 'all' : commaSeparatedFields                                   // 41
    }; // build the StudyDate range parameter                                                                          // 34
                                                                                                                       //
    if (filter.studyDateFrom || filter.studyDateTo) {                                                                  // 45
        var date = "".concat(dateToString(new Date(filter.studyDateFrom)), "-", dateToString(new Date(filter.studyDateTo)));
        parameters.StudyDate = date;                                                                                   // 47
    }                                                                                                                  // 48
                                                                                                                       //
    return server.qidoRoot + '/studies?' + encodeQueryData(parameters);                                                // 50
} /**                                                                                                                  // 51
   * Parses resulting data from a QIDO call into a set of Study MetaData                                               //
   *                                                                                                                   //
   * @param resultData                                                                                                 //
   * @returns {Array} An array of Study MetaData objects                                                               //
   */                                                                                                                  //
                                                                                                                       //
function resultDataToStudies(resultData) {                                                                             // 59
    var studies = [];                                                                                                  // 60
                                                                                                                       //
    if (!resultData || !resultData.length) {                                                                           // 62
        return;                                                                                                        // 63
    }                                                                                                                  // 64
                                                                                                                       //
    resultData.forEach(function (study) {                                                                              // 66
        studies.push({                                                                                                 // 67
            studyInstanceUid: DICOMWeb.getString(study['0020000D']),                                                   // 68
            // 00080005 = SpecificCharacterSet                                                                         // 69
            studyDate: DICOMWeb.getString(study['00080020']),                                                          // 70
            studyTime: DICOMWeb.getString(study['00080030']),                                                          // 71
            accessionNumber: DICOMWeb.getNumber(study['00080050']),                                                    // 72
            referringPhysicianName: DICOMWeb.getString(study['00080090']),                                             // 73
            // 00081190 = URL                                                                                          // 74
            patientName: DICOMWeb.getName(study['00100010']),                                                          // 75
            patientId: DICOMWeb.getString(study['00100020']),                                                          // 76
            patientBirthdate: DICOMWeb.getString(study['00100030']),                                                   // 77
            patientSex: DICOMWeb.getString(study['00100040']),                                                         // 78
            studyId: DICOMWeb.getString(study['00200010']),                                                            // 79
            numberOfStudyRelatedSeries: DICOMWeb.getString(study['00201206']),                                         // 80
            numberOfStudyRelatedInstances: DICOMWeb.getString(study['00201208']),                                      // 81
            studyDescription: DICOMWeb.getString(study['00081030']),                                                   // 82
            // modality: DICOMWeb.getString(study['00080060']),                                                        // 83
            // modalitiesInStudy: DICOMWeb.getString(study['00080061']),                                               // 84
            modalities: DICOMWeb.getString(DICOMWeb.getModalities(study['00080060'], study['00080061']))               // 85
        });                                                                                                            // 67
    });                                                                                                                // 87
    return studies;                                                                                                    // 89
}                                                                                                                      // 90
                                                                                                                       //
Services.QIDO.Studies = function (server, filter) {                                                                    // 92
    var url = filterToQIDOURL(server, filter);                                                                         // 93
    var result = DICOMWeb.getJSON(url, server.requestOptions);                                                         // 94
    return resultDataToStudies(result.data);                                                                           // 95
};                                                                                                                     // 96
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"remote":{"instances.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/remote/instances.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var remoteGetValue = void 0;                                                                                           // 1
module.watch(require("../../lib/remoteGetValue"), {                                                                    // 1
    remoteGetValue: function (v) {                                                                                     // 1
        remoteGetValue = v;                                                                                            // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
/**                                                                                                                    // 3
 * Parses data returned from a QIDO search and transforms it into                                                      //
 * an array of series that are present in the study                                                                    //
 *                                                                                                                     //
 * @param server The DICOM server                                                                                      //
 * @param studyInstanceUid                                                                                             //
 * @param resultData                                                                                                   //
 * @returns {Array} Series List                                                                                        //
 */function resultDataToStudyMetadata(server, studyInstanceUid, resultData) {                                          //
    var seriesMap = {};                                                                                                // 13
    var seriesList = [];                                                                                               // 14
    resultData.forEach(function (instance) {                                                                           // 16
        // Use seriesMap to cache series data                                                                          // 17
        // If the series instance UID has already been used to                                                         // 18
        // process series data, continue using that series                                                             // 19
        var seriesInstanceUid = remoteGetValue(instance['0020,000e']);                                                 // 20
        var series = seriesMap[seriesInstanceUid]; // If no series data exists in the seriesMap cache variable,        // 21
        // process any available series data                                                                           // 24
                                                                                                                       //
        if (!series) {                                                                                                 // 25
            series = {                                                                                                 // 26
                seriesInstanceUid: seriesInstanceUid,                                                                  // 27
                seriesNumber: parseFloat(remoteGetValue(instance['0020,0011'])),                                       // 28
                instances: []                                                                                          // 29
            }; // Save this data in the seriesMap cache variable                                                       // 26
                                                                                                                       //
            seriesMap[seriesInstanceUid] = series;                                                                     // 33
            seriesList.push(series);                                                                                   // 34
        } // The uri for the dicomweb                                                                                  // 35
        // NOTE: DCM4CHEE seems to return the data zipped                                                              // 38
        // NOTE: Orthanc returns the data with multi-part mime which cornerstoneWADOImageLoader doesn't                // 39
        //       know how to parse yet                                                                                 // 40
        //var uri = DICOMWeb.getString(instance['00081190']);                                                          // 41
        //uri = uri.replace('wado-rs', 'dicom-web');                                                                   // 42
        // manually create a WADO-URI from the UIDs                                                                    // 44
        // NOTE: Haven't been able to get Orthanc's WADO-URI to work yet - maybe its not configured?                   // 45
                                                                                                                       //
                                                                                                                       //
        var sopInstanceUid = remoteGetValue(instance['0008,0018']);                                                    // 46
        var uri = server.wadoUriRoot + '?requestType=WADO&studyUID=' + studyInstanceUid + '&seriesUID=' + seriesInstanceUid + '&objectUID=' + sopInstanceUid + "&contentType=application%2Fdicom"; // Add this instance to the current series
                                                                                                                       //
        series.instances.push({                                                                                        // 50
            sopClassUid: remoteGetValue(instance['0008,0016']),                                                        // 51
            sopInstanceUid: sopInstanceUid,                                                                            // 52
            uri: uri,                                                                                                  // 53
            instanceNumber: parseFloat(remoteGetValue(instance['0020,0013']))                                          // 54
        });                                                                                                            // 50
    });                                                                                                                // 56
    return seriesList;                                                                                                 // 57
} /**                                                                                                                  // 58
   * Retrieve a set of instances using a QIDO call                                                                     //
   * @param server                                                                                                     //
   * @param studyInstanceUid                                                                                           //
   * @returns {{wadoUriRoot: String, studyInstanceUid: String, seriesList: Array}}                                     //
   */                                                                                                                  //
                                                                                                                       //
Services.REMOTE.Instances = function (server, studyInstanceUid) {                                                      // 66
    var parameters = {                                                                                                 // 67
        PatientName: "",                                                                                               // 68
        PatientID: "",                                                                                                 // 69
        AccessionNumber: "",                                                                                           // 70
        SeriesInstanceUID: "",                                                                                         // 71
        SeriesNumber: "",                                                                                              // 72
        SOPClassUID: "",                                                                                               // 73
        InstanceNumber: ""                                                                                             // 74
    };                                                                                                                 // 67
    var remote = new OrthancRemote(server.root, server.sourceAE);                                                      // 77
    return {                                                                                                           // 79
        wadoUriRoot: server.wadoUriRoot,                                                                               // 80
        studyInstanceUid: studyInstanceUid,                                                                            // 81
        seriesList: resultDataToStudyMetadata(server, studyInstanceUid, remote.findInstances(server.modality, studyInstanceUid, null, parameters))
    };                                                                                                                 // 79
};                                                                                                                     // 84
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"retrieveMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/remote/retrieveMetadata.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var remoteGetValue = void 0;                                                                                           // 1
module.watch(require("../../lib/remoteGetValue"), {                                                                    // 1
    remoteGetValue: function (v) {                                                                                     // 1
        remoteGetValue = v;                                                                                            // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
var parseFloatArray = void 0;                                                                                          // 1
module.watch(require("../../lib/parseFloatArray"), {                                                                   // 1
    parseFloatArray: function (v) {                                                                                    // 1
        parseFloatArray = v;                                                                                           // 1
    }                                                                                                                  // 1
}, 1);                                                                                                                 // 1
                                                                                                                       //
/**                                                                                                                    // 4
 * Parses the SourceImageSequence, if it exists, in order                                                              //
 * to return a ReferenceSOPInstanceUID. The ReferenceSOPInstanceUID                                                    //
 * is used to refer to this image in any accompanying DICOM-SR documents.                                              //
 *                                                                                                                     //
 * @param instance                                                                                                     //
 * @returns {String} The ReferenceSOPInstanceUID                                                                       //
 */function getSourceImageInstanceUid(instance) {                                                                      //
    // TODO= Parse the whole Source Image Sequence                                                                     // 13
    // This is a really poor workaround for now.                                                                       // 14
    // Later we should probably parse the whole sequence.                                                              // 15
    var SourceImageSequence = remoteGetValue(instance['0008,2112']);                                                   // 16
                                                                                                                       //
    if (SourceImageSequence && SourceImageSequence.Value && SourceImageSequence.Value.length) {                        // 17
        return SourceImageSequence.Value[0]['0008,1155'].Value[0];                                                     // 18
    }                                                                                                                  // 19
} /**                                                                                                                  // 20
   * Parses result data from a WADO search into Study MetaData                                                         //
   * Returns an object populated with study metadata, including the                                                    //
   * series list.                                                                                                      //
   *                                                                                                                   //
   * @param server                                                                                                     //
   * @param studyInstanceUid                                                                                           //
   * @param resultData                                                                                                 //
   * @returns {{seriesList: Array, patientName: *, patientId: *, accessionNumber: *, studyDate: *, modalities: *, studyDescription: *, imageCount: *, studyInstanceUid: *}}
   */                                                                                                                  //
                                                                                                                       //
function resultDataToStudyMetadata(server, studyInstanceUid, resultData) {                                             // 32
    var seriesMap = {};                                                                                                // 33
    var seriesList = [];                                                                                               // 34
                                                                                                                       //
    if (!resultData.length) {                                                                                          // 36
        return;                                                                                                        // 37
    }                                                                                                                  // 38
                                                                                                                       //
    var anInstance = resultData[0];                                                                                    // 40
                                                                                                                       //
    if (!anInstance) {                                                                                                 // 41
        return;                                                                                                        // 42
    }                                                                                                                  // 43
                                                                                                                       //
    var studyData = {                                                                                                  // 45
        seriesList: seriesList,                                                                                        // 46
        patientName: remoteGetValue(anInstance['0010,0010']),                                                          // 47
        patientId: remoteGetValue(anInstance['0010,0020']),                                                            // 48
        accessionNumber: remoteGetValue(anInstance['0008,0050']),                                                      // 49
        studyDate: remoteGetValue(anInstance['0008,0020']),                                                            // 50
        modalities: remoteGetValue(anInstance['0008,0061']),                                                           // 51
        studyDescription: remoteGetValue(anInstance['0008,1030']),                                                     // 52
        imageCount: remoteGetValue(anInstance['0020,1208']),                                                           // 53
        studyInstanceUid: remoteGetValue(anInstance['0020,000d'])                                                      // 54
    };                                                                                                                 // 45
    resultData.forEach(function (instance) {                                                                           // 57
        var seriesInstanceUid = remoteGetValue(instance['0020,000e']);                                                 // 58
        var series = seriesMap[seriesInstanceUid];                                                                     // 59
                                                                                                                       //
        if (!series) {                                                                                                 // 60
            series = {                                                                                                 // 61
                seriesDescription: remoteGetValue(instance['0008,103e']),                                              // 62
                modality: remoteGetValue(instance['0008,0060']),                                                       // 63
                seriesInstanceUid: seriesInstanceUid,                                                                  // 64
                seriesNumber: parseFloat(remoteGetValue(instance['0020,0011'])),                                       // 65
                instances: []                                                                                          // 66
            };                                                                                                         // 61
            seriesMap[seriesInstanceUid] = series;                                                                     // 68
            seriesList.push(series);                                                                                   // 69
        }                                                                                                              // 70
                                                                                                                       //
        var sopInstanceUid = remoteGetValue(instance['0008,0018']);                                                    // 72
        var instanceSummary = {                                                                                        // 74
            imageType: remoteGetValue(instance['0008,0008']),                                                          // 75
            sopClassUid: remoteGetValue(instance['0008,0016']),                                                        // 76
            sopInstanceUid: sopInstanceUid,                                                                            // 77
            instanceNumber: parseFloat(remoteGetValue(instance['0020,0013'])),                                         // 78
            imagePositionPatient: remoteGetValue(instance['0020,0032']),                                               // 79
            imageOrientationPatient: remoteGetValue(instance['0020,0037']),                                            // 80
            frameOfReferenceUID: remoteGetValue(instance['0020,0052']),                                                // 81
            sliceLocation: parseFloat(remoteGetValue(instance['0020,1041'])),                                          // 82
            samplesPerPixel: parseFloat(remoteGetValue(instance['0028,0002'])),                                        // 83
            photometricInterpretation: remoteGetValue(instance['0028,0004']),                                          // 84
            rows: parseFloat(remoteGetValue(instance['0028,0010'])),                                                   // 85
            columns: parseFloat(remoteGetValue(instance['0028,0011'])),                                                // 86
            pixelSpacing: remoteGetValue(instance['0028,0030']),                                                       // 87
            bitsAllocated: parseFloat(remoteGetValue(instance['0028,0100'])),                                          // 88
            bitsStored: parseFloat(remoteGetValue(instance['0028,0101'])),                                             // 89
            highBit: parseFloat(remoteGetValue(instance['0028,0102'])),                                                // 90
            pixelRepresentation: parseFloat(remoteGetValue(instance['0028,0103'])),                                    // 91
            windowCenter: remoteGetValue(instance['0028,1050']),                                                       // 92
            windowWidth: remoteGetValue(instance['0028,1051']),                                                        // 93
            rescaleIntercept: parseFloat(remoteGetValue(instance['0028,1052'])),                                       // 94
            rescaleSlope: parseFloat(remoteGetValue(instance['0028,1053'])),                                           // 95
            sourceImageInstanceUid: getSourceImageInstanceUid(instance),                                               // 96
            laterality: remoteGetValue(instance['0020,0062']),                                                         // 97
            viewPosition: remoteGetValue(instance['0018,5101']),                                                       // 98
            acquisitionDateTime: remoteGetValue(instance['0008,002A']),                                                // 99
            numberOfFrames: parseFloat(remoteGetValue(instance['0028,0008'])),                                         // 100
            frameIncrementPointer: remoteGetValue(instance['0028,0009']),                                              // 101
            frameTime: parseFloat(remoteGetValue(instance['0018,1063'])),                                              // 102
            frameTimeVector: parseFloatArray(remoteGetValue(instance['0018,1065'])),                                   // 103
            echoNumber: remoteGetValue(instance['0018,0086']),                                                         // 104
            contrastBolusAgent: remoteGetValue(instance['0018,0010'])                                                  // 105
        };                                                                                                             // 74
        var iid = instance['xxxx,0001'].Value;                                                                         // 108
                                                                                                                       //
        if (server.imageRendering === 'wadouri') {                                                                     // 109
            instanceSummary.wadouri = server.wadoUriRoot + '?requestType=WADO&studyUID=' + studyInstanceUid + '&seriesUID=' + seriesInstanceUid + '&objectUID=' + sopInstanceUid + "&contentType=application%2Fdicom";
        } else if (server.imageRendering == 'orthanc') {                                                               // 111
            instanceSummary.wadouri = server.root + '/instances/' + iid + '/file';                                     // 112
        } else {                                                                                                       // 113
            instanceSummary.wadorsuri = server.wadoRoot + '/studies/' + studyInstanceUid + '/series/' + seriesInstanceUid + '/instances/' + sopInstanceUid + '/frames/1';
        }                                                                                                              // 115
                                                                                                                       //
        series.instances.push(instanceSummary);                                                                        // 117
    });                                                                                                                // 118
    console.log(studyData.seriesList[0].instances);                                                                    // 119
    return studyData;                                                                                                  // 120
} /**                                                                                                                  // 121
   * Retrieved Study MetaData from a DICOM server using a WADO call                                                    //
   * @param server                                                                                                     //
   * @param studyInstanceUid                                                                                           //
   * @returns {{seriesList: Array, patientName: *, patientId: *, accessionNumber: *, studyDate: *, modalities: *, studyDescription: *, imageCount: *, studyInstanceUid: *}}
   */                                                                                                                  //
                                                                                                                       //
Services.REMOTE.RetrieveMetadata = function (server, studyInstanceUid) {                                               // 129
    var remote = new OrthancRemote(server.root, server.sourceAE);                                                      // 130
    var study = resultDataToStudyMetadata(server, studyInstanceUid, remote.retrieveMetadata(server.modality, studyInstanceUid));
                                                                                                                       //
    if (!study) {                                                                                                      // 133
        study = {};                                                                                                    // 134
    }                                                                                                                  // 135
                                                                                                                       //
    study.wadoUriRoot = server.wadoUriRoot;                                                                            // 137
    study.studyInstanceUid = studyInstanceUid;                                                                         // 138
    return study;                                                                                                      // 140
};                                                                                                                     // 141
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studies.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/remote/studies.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var remoteGetValue = void 0;                                                                                           // 1
module.watch(require("../../lib/remoteGetValue"), {                                                                    // 1
  remoteGetValue: function (v) {                                                                                       // 1
    remoteGetValue = v;                                                                                                // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
function resultDataToStudies(resultData) {                                                                             // 3
  var studies = [];                                                                                                    // 4
  resultData.forEach(function (study) {                                                                                // 6
    studies.push({                                                                                                     // 7
      studyInstanceUid: remoteGetValue(study['0020,000d']),                                                            // 8
      // 00080005 = SpecificCharacterSet                                                                               // 9
      studyDate: remoteGetValue(study['0008,0020']),                                                                   // 10
      studyTime: remoteGetValue(study['0008,0030']),                                                                   // 11
      accessionNumber: remoteGetValue(study['0008,0050']),                                                             // 12
      referringPhysicianName: remoteGetValue(study['0008,0090']),                                                      // 13
      // 00081190 = URL                                                                                                // 14
      patientName: remoteGetValue(study['0010,0010']),                                                                 // 15
      patientId: remoteGetValue(study['0010,0020']),                                                                   // 16
      patientBirthdate: remoteGetValue(study['0010,0030']),                                                            // 17
      patientSex: remoteGetValue(study['0010,0040']),                                                                  // 18
      studyId: remoteGetValue(study['0020,0010']),                                                                     // 19
      numberOfStudyRelatedSeries: parseFloat(remoteGetValue(study['0020,1206'])),                                      // 20
      numberOfStudyRelatedInstances: parseFloat(remoteGetValue(study['0020,1208'])),                                   // 21
      studyDescription: remoteGetValue(study['0008,1030']),                                                            // 22
      modalities: remoteGetValue(study['0008,0061'])                                                                   // 23
    });                                                                                                                // 7
  });                                                                                                                  // 25
  return studies;                                                                                                      // 26
}                                                                                                                      // 27
                                                                                                                       //
Services.REMOTE.Studies = function (server, filter) {                                                                  // 29
  var parameters = {                                                                                                   // 30
    PatientName: filter.patientName ? filter.patientName : "",                                                         // 31
    PatientID: filter.patientId,                                                                                       // 32
    AccessionNumber: filter.accessionNumber ? filter.accessionNumber : "",                                             // 33
    StudyDescription: "",                                                                                              // 34
    StudyDate: "",                                                                                                     // 35
    StudyTime: "",                                                                                                     // 36
    ReferringPhysicianName: "",                                                                                        // 37
    PatientBirthDate: "",                                                                                              // 38
    PatientSex: "",                                                                                                    // 39
    StudyID: "",                                                                                                       // 40
    NumberOfStudyRelatedSeries: "",                                                                                    // 41
    NumberOfStudyRelatedInstances: "",                                                                                 // 42
    ModalitiesInStudy: ""                                                                                              // 43
  };                                                                                                                   // 30
  var remote = new OrthancRemote(server.root, server.sourceAE);                                                        // 45
  var data = remote.findStudies(server.modality, parameters);                                                          // 46
  return resultDataToStudies(data.results);                                                                            // 48
};                                                                                                                     // 49
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"wado":{"retrieveMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/server/services/wado/retrieveMetadata.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var parseFloatArray = void 0;                                                                                          // 1
module.watch(require("../../lib/parseFloatArray"), {                                                                   // 1
    parseFloatArray: function (v) {                                                                                    // 1
        parseFloatArray = v;                                                                                           // 1
    }                                                                                                                  // 1
}, 0);                                                                                                                 // 1
/**                                                                                                                    // 3
 * Simple cache schema for retrieved color palettes.                                                                   //
 */var paletteColorCache = {                                                                                           //
    count: 0,                                                                                                          // 7
    maxAge: 24 * 60 * 60 * 1000,                                                                                       // 8
    // 24h cache?                                                                                                      // 8
    entries: {},                                                                                                       // 9
    isValidUID: function (paletteUID) {                                                                                // 10
        return typeof paletteUID === 'string' && paletteUID.length > 0;                                                // 11
    },                                                                                                                 // 12
    get: function (paletteUID) {                                                                                       // 13
        var entry = null;                                                                                              // 14
                                                                                                                       //
        if (this.entries.hasOwnProperty(paletteUID)) {                                                                 // 15
            entry = this.entries[paletteUID]; // check how the entry is...                                             // 16
                                                                                                                       //
            if (Date.now() - entry.time > this.maxAge) {                                                               // 18
                // entry is too old... remove entry.                                                                   // 19
                delete this.entries[paletteUID];                                                                       // 20
                this.count--;                                                                                          // 21
                entry = null;                                                                                          // 22
            }                                                                                                          // 23
        }                                                                                                              // 24
                                                                                                                       //
        return entry;                                                                                                  // 25
    },                                                                                                                 // 26
    add: function (entry) {                                                                                            // 27
        if (this.isValidUID(entry.uid)) {                                                                              // 28
            var paletteUID = entry.uid;                                                                                // 29
                                                                                                                       //
            if (this.entries.hasOwnProperty(paletteUID) !== true) {                                                    // 30
                this.count++; // increment cache entry count...                                                        // 31
            }                                                                                                          // 32
                                                                                                                       //
            entry.time = Date.now();                                                                                   // 33
            this.entries[paletteUID] = entry; // @TODO: Add logic to get rid of old entries and reduce memory usage...
        }                                                                                                              // 36
    }                                                                                                                  // 37
}; /**                                                                                                                 // 6
    * Creates a URL for a WADO search                                                                                  //
    *                                                                                                                  //
    * @param server                                                                                                    //
    * @param studyInstanceUid                                                                                          //
    * @returns {string}                                                                                                //
    */                                                                                                                 //
                                                                                                                       //
function buildUrl(server, studyInstanceUid) {                                                                          // 47
    return server.wadoRoot + '/studies/' + studyInstanceUid + '/metadata';                                             // 48
} /** Returns a WADO url for an instance                                                                               // 49
   *                                                                                                                   //
   * @param studyInstanceUid                                                                                           //
   * @param seriesInstanceUid                                                                                          //
   * @param sopInstanceUid                                                                                             //
   * @returns  {string}                                                                                                //
   */                                                                                                                  //
                                                                                                                       //
function buildInstanceWadoUrl(server, studyInstanceUid, seriesInstanceUid, sopInstanceUid) {                           // 58
    var params = [];                                                                                                   // 59
    params.push('requestType=WADO');                                                                                   // 61
    params.push("studyUID=" + studyInstanceUid);                                                                       // 62
    params.push("seriesUID=" + seriesInstanceUid);                                                                     // 63
    params.push("objectUID=" + sopInstanceUid);                                                                        // 64
    params.push('contentType=application%2Fdicom');                                                                    // 65
    params.push('transferSyntax=*');                                                                                   // 66
    return server.wadoUriRoot + "?" + params.join('&');                                                                // 68
}                                                                                                                      // 69
                                                                                                                       //
function buildInstanceWadoRsUri(server, studyInstanceUid, seriesInstanceUid, sopInstanceUid) {                         // 71
    return server.wadoRoot + "/studies/" + studyInstanceUid + "/series/" + seriesInstanceUid + "/instances/" + sopInstanceUid;
}                                                                                                                      // 73
                                                                                                                       //
function buildInstanceFrameWadoRsUri(server, studyInstanceUid, seriesInstanceUid, sopInstanceUid, frame) {             // 75
    var baseWadoRsUri = buildInstanceWadoRsUri(server, studyInstanceUid, seriesInstanceUid, sopInstanceUid);           // 76
    frame = frame != null || 1;                                                                                        // 77
    return baseWadoRsUri + "/frames/" + frame;                                                                         // 79
} /**                                                                                                                  // 80
   * Parses the SourceImageSequence, if it exists, in order                                                            //
   * to return a ReferenceSOPInstanceUID. The ReferenceSOPInstanceUID                                                  //
   * is used to refer to this image in any accompanying DICOM-SR documents.                                            //
   *                                                                                                                   //
   * @param instance                                                                                                   //
   * @returns {String} The ReferenceSOPInstanceUID                                                                     //
   */                                                                                                                  //
                                                                                                                       //
function getSourceImageInstanceUid(instance) {                                                                         // 90
    // TODO= Parse the whole Source Image Sequence                                                                     // 91
    // This is a really poor workaround for now.                                                                       // 92
    // Later we should probably parse the whole sequence.                                                              // 93
    var SourceImageSequence = instance['00082112'];                                                                    // 94
                                                                                                                       //
    if (SourceImageSequence && SourceImageSequence.Value && SourceImageSequence.Value.length) {                        // 95
        return SourceImageSequence.Value[0]['00081155'].Value[0];                                                      // 96
    }                                                                                                                  // 97
}                                                                                                                      // 98
                                                                                                                       //
function getPaletteColor(server, instance, tag, lutDescriptor) {                                                       // 100
    var lut = [];                                                                                                      // 101
    var numLutEntries = lutDescriptor[0];                                                                              // 102
    var bits = lutDescriptor[2];                                                                                       // 103
    var uri = WADOProxy.convertURL(instance[tag].BulkDataURI, server);                                                 // 104
    var data = DICOMWeb.getBulkData(uri);                                                                              // 105
                                                                                                                       //
    for (var i = 0; i < numLutEntries; i++) {                                                                          // 107
        if (bits === 16) {                                                                                             // 108
            lut[i] = data.readUInt16LE(i * 2);                                                                         // 109
        } else {                                                                                                       // 110
            lut[i] = data.readUInt8(i);                                                                                // 111
        }                                                                                                              // 112
    }                                                                                                                  // 113
                                                                                                                       //
    return lut;                                                                                                        // 115
} /**                                                                                                                  // 116
   * Fetch palette colors for instances with "PALETTE COLOR" photometricInterpretation.                                //
   *                                                                                                                   //
   * @param server {Object} Current server;                                                                            //
   * @param instance {Object} The retrieved instance metadata;                                                         //
   * @returns {String} The ReferenceSOPInstanceUID                                                                     //
   */                                                                                                                  //
                                                                                                                       //
function getPaletteColors(server, instance, lutDescriptor) {                                                           // 125
    var entry = null,                                                                                                  // 127
        paletteUID = DICOMWeb.getString(instance['00281199']);                                                         // 127
                                                                                                                       //
    if (paletteColorCache.isValidUID(paletteUID)) {                                                                    // 130
        entry = paletteColorCache.get(paletteUID);                                                                     // 131
    } else {                                                                                                           // 132
        paletteUID = null;                                                                                             // 133
    }                                                                                                                  // 134
                                                                                                                       //
    if (!entry) {                                                                                                      // 136
        // no entry on cache... Fetch remote data.                                                                     // 137
        try {                                                                                                          // 138
            var r = void 0,                                                                                            // 139
                g = void 0,                                                                                            // 139
                b = void 0;                                                                                            // 139
            r = getPaletteColor(server, instance, '00281201', lutDescriptor);                                          // 140
            g = getPaletteColor(server, instance, '00281202', lutDescriptor);                                          // 141
            ;                                                                                                          // 141
            b = getPaletteColor(server, instance, '00281203', lutDescriptor);                                          // 142
            ;                                                                                                          // 142
            entry = {                                                                                                  // 144
                red: r,                                                                                                // 144
                green: g,                                                                                              // 144
                blue: b                                                                                                // 144
            };                                                                                                         // 144
                                                                                                                       //
            if (paletteUID !== null) {                                                                                 // 145
                // when paletteUID is present, the entry can be cached...                                              // 146
                entry.uid = paletteUID;                                                                                // 147
                paletteColorCache.add(entry);                                                                          // 148
            }                                                                                                          // 149
        } catch (error) {                                                                                              // 150
            console.log("(" + error.name + ") " + error.message);                                                      // 151
        }                                                                                                              // 152
    }                                                                                                                  // 153
                                                                                                                       //
    return entry;                                                                                                      // 155
}                                                                                                                      // 157
                                                                                                                       //
function getFrameIncrementPointer(element) {                                                                           // 159
    var frameIncrementPointerNames = {                                                                                 // 160
        '00181065': 'frameTimeVector',                                                                                 // 161
        '00181063': 'frameTime'                                                                                        // 162
    };                                                                                                                 // 160
                                                                                                                       //
    if (!element || !element.Value || !element.Value.length) {                                                         // 165
        return;                                                                                                        // 166
    }                                                                                                                  // 167
                                                                                                                       //
    var value = element.Value[0];                                                                                      // 169
    return frameIncrementPointerNames[value];                                                                          // 170
}                                                                                                                      // 171
                                                                                                                       //
function getRadiopharmaceuticalInfo(instance) {                                                                        // 173
    var modality = DICOMWeb.getString(instance['00080060']);                                                           // 174
                                                                                                                       //
    if (modality !== 'PT') {                                                                                           // 176
        return;                                                                                                        // 177
    }                                                                                                                  // 178
                                                                                                                       //
    var radiopharmaceuticalInfo = instance['00540016'];                                                                // 180
                                                                                                                       //
    if (radiopharmaceuticalInfo === undefined || !radiopharmaceuticalInfo.Value || !radiopharmaceuticalInfo.Value.length) {
        return;                                                                                                        // 182
    }                                                                                                                  // 183
                                                                                                                       //
    var firstPetRadiopharmaceuticalInfo = radiopharmaceuticalInfo.Value[0];                                            // 185
    return {                                                                                                           // 186
        radiopharmaceuticalStartTime: DICOMWeb.getString(firstPetRadiopharmaceuticalInfo['00181072']),                 // 187
        radionuclideTotalDose: DICOMWeb.getNumber(firstPetRadiopharmaceuticalInfo['00181074']),                        // 188
        radionuclideHalfLife: DICOMWeb.getNumber(firstPetRadiopharmaceuticalInfo['00181075'])                          // 189
    };                                                                                                                 // 186
} /**                                                                                                                  // 191
   * Parses result data from a WADO search into Study MetaData                                                         //
   * Returns an object populated with study metadata, including the                                                    //
   * series list.                                                                                                      //
   *                                                                                                                   //
   * @param server                                                                                                     //
   * @param studyInstanceUid                                                                                           //
   * @param resultData                                                                                                 //
   * @returns {{seriesList: Array, patientName: *, patientId: *, accessionNumber: *, studyDate: *, modalities: *, studyDescription: *, imageCount: *, studyInstanceUid: *}}
   */                                                                                                                  //
                                                                                                                       //
function resultDataToStudyMetadata(server, studyInstanceUid, resultData) {                                             // 203
    var seriesMap = {};                                                                                                // 204
    var seriesList = [];                                                                                               // 205
                                                                                                                       //
    if (!resultData.length) {                                                                                          // 207
        return;                                                                                                        // 208
    }                                                                                                                  // 209
                                                                                                                       //
    var anInstance = resultData[0];                                                                                    // 211
                                                                                                                       //
    if (!anInstance) {                                                                                                 // 212
        return;                                                                                                        // 213
    }                                                                                                                  // 214
                                                                                                                       //
    var studyData = {                                                                                                  // 216
        seriesList: seriesList,                                                                                        // 217
        patientName: DICOMWeb.getName(anInstance['00100010']),                                                         // 218
        patientId: DICOMWeb.getString(anInstance['00100020']),                                                         // 219
        patientAge: DICOMWeb.getNumber(anInstance['00101010']),                                                        // 220
        patientSize: DICOMWeb.getNumber(anInstance['00101020']),                                                       // 221
        patientWeight: DICOMWeb.getNumber(anInstance['00101030']),                                                     // 222
        accessionNumber: DICOMWeb.getString(anInstance['00080050']),                                                   // 223
        studyDate: DICOMWeb.getString(anInstance['00080020']),                                                         // 224
        modalities: DICOMWeb.getString(anInstance['00080061']),                                                        // 225
        studyDescription: DICOMWeb.getString(anInstance['00081030']),                                                  // 226
        imageCount: DICOMWeb.getString(anInstance['00201208']),                                                        // 227
        studyInstanceUid: DICOMWeb.getString(anInstance['0020000D']),                                                  // 228
        institutionName: DICOMWeb.getString(anInstance['00080080'])                                                    // 229
    };                                                                                                                 // 216
    resultData.forEach(function (instance) {                                                                           // 232
        var seriesInstanceUid = DICOMWeb.getString(instance['0020000E']);                                              // 233
        var series = seriesMap[seriesInstanceUid];                                                                     // 234
                                                                                                                       //
        if (!series) {                                                                                                 // 235
            series = {                                                                                                 // 236
                seriesDescription: DICOMWeb.getString(instance['0008103E']),                                           // 237
                modality: DICOMWeb.getString(instance['00080060']),                                                    // 238
                seriesInstanceUid: seriesInstanceUid,                                                                  // 239
                seriesNumber: DICOMWeb.getNumber(instance['00200011']),                                                // 240
                seriesDate: DICOMWeb.getString(instance['00080021']),                                                  // 241
                seriesTime: DICOMWeb.getString(instance['00080031']),                                                  // 242
                instances: []                                                                                          // 243
            };                                                                                                         // 236
            seriesMap[seriesInstanceUid] = series;                                                                     // 245
            seriesList.push(series);                                                                                   // 246
        }                                                                                                              // 247
                                                                                                                       //
        var sopInstanceUid = DICOMWeb.getString(instance['00080018']);                                                 // 249
        var wadouri = buildInstanceWadoUrl(server, studyInstanceUid, seriesInstanceUid, sopInstanceUid);               // 251
        var baseWadoRsUri = buildInstanceWadoRsUri(server, studyInstanceUid, seriesInstanceUid, sopInstanceUid);       // 252
        var wadorsuri = buildInstanceFrameWadoRsUri(server, studyInstanceUid, seriesInstanceUid, sopInstanceUid);      // 253
        var instanceSummary = {                                                                                        // 255
            imageType: DICOMWeb.getString(instance['00080008']),                                                       // 256
            sopClassUid: DICOMWeb.getString(instance['00080016']),                                                     // 257
            modality: DICOMWeb.getString(instance['00080060']),                                                        // 258
            sopInstanceUid: sopInstanceUid,                                                                            // 259
            instanceNumber: DICOMWeb.getNumber(instance['00200013']),                                                  // 260
            imagePositionPatient: DICOMWeb.getString(instance['00200032']),                                            // 261
            imageOrientationPatient: DICOMWeb.getString(instance['00200037']),                                         // 262
            frameOfReferenceUID: DICOMWeb.getString(instance['00200052']),                                             // 263
            sliceLocation: DICOMWeb.getNumber(instance['00201041']),                                                   // 264
            samplesPerPixel: DICOMWeb.getNumber(instance['00280002']),                                                 // 265
            photometricInterpretation: DICOMWeb.getString(instance['00280004']),                                       // 266
            planarConfiguration: DICOMWeb.getNumber(instance['00280006']),                                             // 267
            rows: DICOMWeb.getNumber(instance['00280010']),                                                            // 268
            columns: DICOMWeb.getNumber(instance['00280011']),                                                         // 269
            pixelSpacing: DICOMWeb.getString(instance['00280030']),                                                    // 270
            pixelAspectRatio: DICOMWeb.getString(instance['00280034']),                                                // 271
            bitsAllocated: DICOMWeb.getNumber(instance['00280100']),                                                   // 272
            bitsStored: DICOMWeb.getNumber(instance['00280101']),                                                      // 273
            highBit: DICOMWeb.getNumber(instance['00280102']),                                                         // 274
            pixelRepresentation: DICOMWeb.getNumber(instance['00280103']),                                             // 275
            smallestPixelValue: DICOMWeb.getNumber(instance['00280106']),                                              // 276
            largestPixelValue: DICOMWeb.getNumber(instance['00280107']),                                               // 277
            windowCenter: DICOMWeb.getString(instance['00281050']),                                                    // 278
            windowWidth: DICOMWeb.getString(instance['00281051']),                                                     // 279
            rescaleIntercept: DICOMWeb.getNumber(instance['00281052']),                                                // 280
            rescaleSlope: DICOMWeb.getNumber(instance['00281053']),                                                    // 281
            rescaleType: DICOMWeb.getNumber(instance['00281054']),                                                     // 282
            sourceImageInstanceUid: getSourceImageInstanceUid(instance),                                               // 283
            laterality: DICOMWeb.getString(instance['00200062']),                                                      // 284
            viewPosition: DICOMWeb.getString(instance['00185101']),                                                    // 285
            acquisitionDateTime: DICOMWeb.getString(instance['0008002A']),                                             // 286
            numberOfFrames: DICOMWeb.getNumber(instance['00280008']),                                                  // 287
            frameIncrementPointer: getFrameIncrementPointer(instance['00280009']),                                     // 288
            frameTime: DICOMWeb.getNumber(instance['00181063']),                                                       // 289
            frameTimeVector: parseFloatArray(DICOMWeb.getString(instance['00181065'])),                                // 290
            sliceThickness: DICOMWeb.getNumber(instance['00180050']),                                                  // 291
            lossyImageCompression: DICOMWeb.getString(instance['00282110']),                                           // 292
            derivationDescription: DICOMWeb.getString(instance['00282111']),                                           // 293
            lossyImageCompressionRatio: DICOMWeb.getString(instance['00282112']),                                      // 294
            lossyImageCompressionMethod: DICOMWeb.getString(instance['00282114']),                                     // 295
            echoNumber: DICOMWeb.getString(instance['00180086']),                                                      // 296
            contrastBolusAgent: DICOMWeb.getString(instance['00180010']),                                              // 297
            radiopharmaceuticalInfo: getRadiopharmaceuticalInfo(instance),                                             // 298
            baseWadoRsUri: baseWadoRsUri,                                                                              // 299
            wadouri: WADOProxy.convertURL(wadouri, server),                                                            // 300
            wadorsuri: WADOProxy.convertURL(wadorsuri, server),                                                        // 301
            imageRendering: server.imageRendering,                                                                     // 302
            thumbnailRendering: server.thumbnailRendering                                                              // 303
        }; // Get additional information if the instance uses "PALETTE COLOR" photometric interpretation               // 255
                                                                                                                       //
        if (instanceSummary.photometricInterpretation === 'PALETTE COLOR') {                                           // 307
            var redPaletteColorLookupTableDescriptor = parseFloatArray(DICOMWeb.getString(instance['00281101']));      // 308
            var greenPaletteColorLookupTableDescriptor = parseFloatArray(DICOMWeb.getString(instance['00281102']));    // 309
            var bluePaletteColorLookupTableDescriptor = parseFloatArray(DICOMWeb.getString(instance['00281103']));     // 310
            var palettes = getPaletteColors(server, instance, redPaletteColorLookupTableDescriptor);                   // 311
                                                                                                                       //
            if (palettes) {                                                                                            // 313
                if (palettes.uid) {                                                                                    // 314
                    instanceSummary.paletteColorLookupTableUID = palettes.uid;                                         // 315
                }                                                                                                      // 316
                                                                                                                       //
                instanceSummary.redPaletteColorLookupTableData = palettes.red;                                         // 317
                instanceSummary.greenPaletteColorLookupTableData = palettes.green;                                     // 318
                instanceSummary.bluePaletteColorLookupTableData = palettes.blue;                                       // 319
                instanceSummary.redPaletteColorLookupTableDescriptor = redPaletteColorLookupTableDescriptor;           // 320
                instanceSummary.greenPaletteColorLookupTableDescriptor = greenPaletteColorLookupTableDescriptor;       // 321
                instanceSummary.bluePaletteColorLookupTableDescriptor = bluePaletteColorLookupTableDescriptor;         // 322
            }                                                                                                          // 323
        }                                                                                                              // 324
                                                                                                                       //
        series.instances.push(instanceSummary);                                                                        // 326
    });                                                                                                                // 328
    return studyData;                                                                                                  // 330
} /**                                                                                                                  // 331
   * Retrieved Study MetaData from a DICOM server using a WADO call                                                    //
   * @param server                                                                                                     //
   * @param studyInstanceUid                                                                                           //
   * @returns {{seriesList: Array, patientName: *, patientId: *, accessionNumber: *, studyDate: *, modalities: *, studyDescription: *, imageCount: *, studyInstanceUid: *}}
   */                                                                                                                  //
                                                                                                                       //
Services.WADO.RetrieveMetadata = function (server, studyInstanceUid) {                                                 // 339
    var url = buildUrl(server, studyInstanceUid);                                                                      // 340
    var result = DICOMWeb.getJSON(url, server.requestOptions);                                                         // 342
    var study = resultDataToStudyMetadata(server, studyInstanceUid, result.data);                                      // 344
                                                                                                                       //
    if (!study) {                                                                                                      // 345
        study = {};                                                                                                    // 346
    }                                                                                                                  // 347
                                                                                                                       //
    study.wadoUriRoot = server.wadoUriRoot;                                                                            // 349
    study.studyInstanceUid = studyInstanceUid;                                                                         // 350
    return study;                                                                                                      // 352
};                                                                                                                     // 353
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/ohif:study-list/both/index.js");
require("./node_modules/meteor/ohif:study-list/server/index.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ohif:study-list'] = {}, {
  Services: Services
});

})();

//# sourceMappingURL=ohif_study-list.js.map
