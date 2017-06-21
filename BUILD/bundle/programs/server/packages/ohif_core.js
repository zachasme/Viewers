(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
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
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:core":{"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_core/main.js                                                                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.export({                                                                                                 // 1
    OHIF: function () {                                                                                         // 1
        return OHIF;                                                                                            // 1
    }                                                                                                           // 1
});                                                                                                             // 1
var Meteor = void 0;                                                                                            // 1
module.watch(require("meteor/meteor"), {                                                                        // 1
    Meteor: function (v) {                                                                                      // 1
        Meteor = v;                                                                                             // 1
    }                                                                                                           // 1
}, 0);                                                                                                          // 1
/*                                                                                                              // 3
 * Defines the base OHIF object                                                                                 //
 */var OHIF = {                                                                                                 //
    log: {},                                                                                                    // 8
    ui: {},                                                                                                     // 9
    utils: {},                                                                                                  // 10
    viewer: {},                                                                                                 // 11
    cornerstone: {}                                                                                             // 12
}; // Expose the OHIF object to the client if it is on development mode                                         // 7
// @TODO: remove this after applying namespace to this package                                                  // 16
                                                                                                                //
if (Meteor.isClient) {                                                                                          // 17
    window.OHIF = OHIF;                                                                                         // 18
}                                                                                                               // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"server":{"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_core/server/index.js                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.watch(require("./mongo.js"));                                                                            // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mongo.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_core/server/mongo.js                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
var OHIF = void 0;                                                                                              // 1
module.watch(require("meteor/ohif:core"), {                                                                     // 1
    OHIF: function (v) {                                                                                        // 1
        OHIF = v;                                                                                               // 1
    }                                                                                                           // 1
}, 0);                                                                                                          // 1
var Meteor = void 0;                                                                                            // 1
module.watch(require("meteor/meteor"), {                                                                        // 1
    Meteor: function (v) {                                                                                      // 1
        Meteor = v;                                                                                             // 1
    }                                                                                                           // 1
}, 1);                                                                                                          // 1
                                                                                                                //
// Mongo data manipulation utilities                                                                            // 4
var MongoUtils = function () {                                                                                  //
    function MongoUtils() {                                                                                     //
        (0, _classCallCheck3.default)(this, MongoUtils);                                                        //
    }                                                                                                           //
                                                                                                                //
    // Check if there is an user logged in                                                                      // 7
    MongoUtils.validateUser = function () {                                                                     //
        function validateUser() {                                                                               //
            // Throw error if there is no user logged in                                                        // 9
            if (!Meteor.userId()) {                                                                             // 10
                throw new Meteor.Error('not-authorized');                                                       // 11
            }                                                                                                   // 12
        }                                                                                                       // 13
                                                                                                                //
        return validateUser;                                                                                    //
    }(); // Generic callback to MongoDB write operations                                                        //
                                                                                                                //
                                                                                                                //
    MongoUtils.writeCallback = function () {                                                                    //
        function writeCallback(error, affected) {                                                               //
            // Throw error if it was not possible to complete the write operation                               // 17
            if (error) {                                                                                        // 18
                throw new Meteor.Error('data-write', error);                                                    // 19
            }                                                                                                   // 20
        }                                                                                                       // 21
                                                                                                                //
        return writeCallback;                                                                                   //
    }();                                                                                                        //
                                                                                                                //
    return MongoUtils;                                                                                          //
}(); // Expose the class in the OHIF object                                                                     //
                                                                                                                //
                                                                                                                //
OHIF.MongoUtils = MongoUtils;                                                                                   // 26
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"both":{"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_core/both/index.js                                                                             //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.watch(require("./utils"));                                                                               // 1
module.watch(require("./schema.js"));                                                                           // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_core/both/schema.js                                                                            //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var SimpleSchema = void 0;                                                                                      // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                          // 1
    SimpleSchema: function (v) {                                                                                // 1
        SimpleSchema = v;                                                                                       // 1
    }                                                                                                           // 1
}, 0);                                                                                                          // 1
/*                                                                                                              // 3
 Extend the available options on schema definitions:                                                            //
                                                                                                                //
  * valuesLabels: Used in conjunction with allowedValues to define the text                                     //
    label for each value (used on forms)                                                                        //
                                                                                                                //
  * textOptional: Used to allow empty strings                                                                   //
                                                                                                                //
 */SimpleSchema.extendOptions({                                                                                 //
    valuesLabels: Match.Optional([String]),                                                                     // 13
    textOptional: Match.Optional(Boolean)                                                                       // 14
}); // Add default required validation for empty strings which can be bypassed                                  // 12
// using textOptional=true definition                                                                           // 18
                                                                                                                //
SimpleSchema.addValidator(function () {                                                                         // 19
    if (this.definition.optional !== true && this.definition.textOptional !== true && this.value === '') {      // 20
        return 'required';                                                                                      // 25
    }                                                                                                           // 26
}); // Including [label] for some messages                                                                      // 27
                                                                                                                //
SimpleSchema.messages({                                                                                         // 30
    maxCount: '[label] can not have more than [maxCount] values',                                               // 31
    minCount: '[label] must have at least [minCount] values',                                                   // 32
    notAllowed: '[label] has an invalid value: "[value]"'                                                       // 33
});                                                                                                             // 30
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"utils":{"absoluteUrl.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_core/both/utils/absoluteUrl.js                                                                 //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var OHIF = void 0;                                                                                              // 1
module.watch(require("meteor/ohif:core"), {                                                                     // 1
    OHIF: function (v) {                                                                                        // 1
        OHIF = v;                                                                                               // 1
    }                                                                                                           // 1
}, 0);                                                                                                          // 1
                                                                                                                //
// Return an absolute URL with the given path by supporting the leading "/"                                     // 3
OHIF.utils.absoluteUrl = function (path) {                                                                      // 4
    if (path) {                                                                                                 // 5
        // Remove the leading "/"                                                                               // 6
        path = path.replace(/^\//, '');                                                                         // 7
    }                                                                                                           // 8
                                                                                                                //
    return Meteor.absoluteUrl(path);                                                                            // 10
};                                                                                                              // 11
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_core/both/utils/index.js                                                                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.watch(require("./absoluteUrl"));                                                                         // 1
module.watch(require("./objectPath"));                                                                          // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"objectPath.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_core/both/utils/objectPath.js                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                         //
                                                                                                                //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                //
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
var OHIF = void 0;                                                                                              // 1
module.watch(require("meteor/ohif:core"), {                                                                     // 1
    OHIF: function (v) {                                                                                        // 1
        OHIF = v;                                                                                               // 1
    }                                                                                                           // 1
}, 0);                                                                                                          // 1
                                                                                                                //
var ObjectPath = function () {                                                                                  //
    function ObjectPath() {                                                                                     //
        (0, _classCallCheck3.default)(this, ObjectPath);                                                        //
    }                                                                                                           //
                                                                                                                //
    /**                                                                                                         // 5
     * Set an object property based on "path" (namespace) supplied creating                                     //
     * ... intermediary objects if they do not exist.                                                           //
     * @param object {Object} An object where the properties specified on path should be set.                   //
     * @param path {String} A string representing the property to be set, e.g. "user.study.series.timepoint".   //
     * @param value {Any} The value of the property that will be set.                                           //
     * @return {Boolean} Returns "true" on success, "false" if any intermediate component of the supplied path  //
     * ... is not a valid Object, in which case the property cannot be set. No excpetions are thrown.           //
     */ObjectPath.set = function () {                                                                           //
        function set(object, path, value) {                                                                     //
            var components = ObjectPath.getPathComponents(path),                                                // 16
                length = components !== null ? components.length : 0,                                           // 16
                result = false;                                                                                 // 16
                                                                                                                //
            if (length > 0 && ObjectPath.isValidObject(object)) {                                               // 20
                var i = 0,                                                                                      // 22
                    last = length - 1,                                                                          // 22
                    currentObject = object;                                                                     // 22
                                                                                                                //
                while (i < last) {                                                                              // 26
                    var field = components[i];                                                                  // 28
                                                                                                                //
                    if (field in currentObject) {                                                               // 30
                        if (!ObjectPath.isValidObject(currentObject[field])) {                                  // 31
                            break;                                                                              // 32
                        }                                                                                       // 33
                    } else {                                                                                    // 34
                        currentObject[field] = {};                                                              // 35
                    }                                                                                           // 36
                                                                                                                //
                    currentObject = currentObject[field];                                                       // 38
                    i++;                                                                                        // 39
                }                                                                                               // 41
                                                                                                                //
                if (i === last) {                                                                               // 43
                    currentObject[components[last]] = value;                                                    // 44
                    result = true;                                                                              // 45
                }                                                                                               // 46
            }                                                                                                   // 48
                                                                                                                //
            return result;                                                                                      // 50
        }                                                                                                       // 52
                                                                                                                //
        return set;                                                                                             //
    }(); /**                                                                                                    //
          * Get an object property based on "path" (namespace) supplied traversing the object                   //
          * ... tree as necessary.                                                                              //
          * @param object {Object} An object where the properties specified might exist.                        //
          * @param path {String} A string representing the property to be searched for, e.g. "user.study.series.timepoint".
          * @return {Any} The value of the property if found. By default, returns the special type "undefined".
          */                                                                                                    //
                                                                                                                //
    ObjectPath.get = function () {                                                                              //
        function get(object, path) {                                                                            //
            var found = void 0,                                                                                 // 63
                // undefined by default                                                                         // 63
            components = ObjectPath.getPathComponents(path),                                                    // 64
                length = components !== null ? components.length : 0;                                           // 63
                                                                                                                //
            if (length > 0 && ObjectPath.isValidObject(object)) {                                               // 67
                var i = 0,                                                                                      // 69
                    last = length - 1,                                                                          // 69
                    currentObject = object;                                                                     // 69
                                                                                                                //
                while (i < last) {                                                                              // 73
                    var field = components[i];                                                                  // 75
                    var isValid = ObjectPath.isValidObject(currentObject[field]);                               // 77
                                                                                                                //
                    if (field in currentObject && isValid) {                                                    // 78
                        currentObject = currentObject[field];                                                   // 79
                        i++;                                                                                    // 80
                    } else {                                                                                    // 81
                        break;                                                                                  // 82
                    }                                                                                           // 83
                }                                                                                               // 85
                                                                                                                //
                if (i === last && components[last] in currentObject) {                                          // 87
                    found = currentObject[components[last]];                                                    // 88
                }                                                                                               // 89
            }                                                                                                   // 91
                                                                                                                //
            return found;                                                                                       // 93
        }                                                                                                       // 95
                                                                                                                //
        return get;                                                                                             //
    }(); /**                                                                                                    //
          * Check if the supplied argument is a real JavaScript Object instance.                                //
          * @param object {Any} The subject to be tested.                                                       //
          * @return {Boolean} Returns "true" if the object is a real Object instance and "false" otherwise.     //
          */                                                                                                    //
                                                                                                                //
    ObjectPath.isValidObject = function () {                                                                    //
        function isValidObject(object) {                                                                        //
            return (typeof object === "undefined" ? "undefined" : (0, _typeof3.default)(object)) === 'object' && object !== null && object instanceof Object;
        }                                                                                                       // 108
                                                                                                                //
        return isValidObject;                                                                                   //
    }();                                                                                                        //
                                                                                                                //
    ObjectPath.getPathComponents = function () {                                                                //
        function getPathComponents(path) {                                                                      //
            return typeof path === 'string' ? path.split('.') : null;                                           // 111
        }                                                                                                       // 112
                                                                                                                //
        return getPathComponents;                                                                               //
    }();                                                                                                        //
                                                                                                                //
    return ObjectPath;                                                                                          //
}();                                                                                                            //
                                                                                                                //
OHIF.utils.ObjectPath = ObjectPath;                                                                             // 116
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("./node_modules/meteor/ohif:core/main.js");
require("./node_modules/meteor/ohif:core/server/index.js");
require("./node_modules/meteor/ohif:core/both/index.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ohif:core'] = exports;

})();

//# sourceMappingURL=ohif_core.js.map
