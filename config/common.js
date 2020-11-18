/**
 * ***************************************************
 *             Common Fields & Methods               *
 *          Developed By Argha Deysarkar             *
 * ***************************************************
 */



/**
 * Database Name
 */
var DB_NAME = '';

/**
 * database User Id
 */
var DB_USER_ID = '';

/**
 * database Password
 */
var DB_USER_PASSWORD = '';

/**
 * MongoDB URL
 */
var DB_URL = '';

/**
 * MongoDB Replica Set Name
 */
var DB_REPLICASET = '';

/**
 * Digital Ocean Space access ID
 */
var SPACES_ACCESS_KEY_ID = '';

/**
 * Digital Ocean Space access Key
 */
var SPACES_SECRET_ACCESS_KEY = '';

/**
 * Digital Ocean Space Bucket Name
 */
var SPACE_BUCKET = '';

/**
 * Digital Ocean Space Folder Name
 */
var SPACE_PATH = '';

/**
 * Digital Ocean Space End Point
 */
var SPACE_ENDPOINT = '';

/**
 * User log model name
 */
var USER_LOG_MODEL = 'userlog';

/**
 * SMS log model name
 */
var SMS_LOG_MODEL = '';

/**
 * BCC email ids
 */
var BCC = [];

/**
 * Default App Type(Mobile/Web)
 */
var APP_TYPE = 'Web';

var SMS_TEMPLATES = {
    member: ''
};

/**
 * Apps Information JSON
 */
var APPS = {
    'Organization': {
        appname: 'My App',
        orgtype: 'Company',
        senderid: 'COMPAN',
        users: 'staffs',
        userauthkey: 'onesignaluserauth',
        appauthkey: 'onesignalappauth',
        appid: 'onesignalappid',
        weblink: 'https://web.myapp.in/#/',
        applink: {
            all: 'https://play.google.com/store/apps/details?id=com.myorg.myapp'
        }
    }
};

/**
 * ************************************
 *            METHODS                 *
 * ************************************
 */
module.exports = {
    /**
     * Linerar search to a JSON array
     * @param {*} array Array to be searched
     * @param {string} key Key attribute
     * @param {string} value Key value
     */
    findItem: function (array, key, value) {
        for (var index = 0; index < array.length; index++) {
            if (array[index][key] == value) {
                return index;
            }
        }
        return -1;
    },

    /**
     * Linerar search to a JSON array within a specified range
     * @param {*} array Array to be searched
     * @param {string} key Key attribute
     * @param {string} value Key value
     * @param {number} start Lower bound
     * @param {number} end Upper bound
     */
    findItemRange: function (array, key, value, start, end) {
        for (var index = start; index <= end; index++) {
            if (array[index][key] == value) {
                return index;
            }
        }
        return -1;
    },

    /**
     * Linerar search to a JSON array by ignoring case
     * @param {*} array Array to be searched
     * @param {string} key Key attribute
     * @param {string} value Key value
     */
    findItemIgnoreCase: function (array, key, value) {
        for (var index = 0; index < array.length; index++) {
            if (array[index][key].toLowerCase() == value.toLowerCase()) {
                return index;
            }
        }
        return -1;
    },

    /**
     * Pad zero(0) to the left of string
     * @param {string} padString String to be padded
     * @param {number} length Total length of padded string
     */
    leftPad: function (padString, length) {
        var str = padString.toString();
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    },

    /**
     * Get current timestamp id
     */
    getTimeStampId: function () {
        return new Date().valueOf();
    },

    
}

/**
 * ***************************************
 *               EXPORTS                 *
 * ***************************************
 */
module.exports.dbName = DB_NAME;
module.exports.dbUserId = DB_USER_ID;
module.exports.dbUserPassword = DB_USER_PASSWORD;
module.exports.dbURL = DB_URL;
module.exports.dbReplicaSet = DB_REPLICASET;

module.exports.apps = APPS;

module.exports.spacesAccessKeyId = SPACES_ACCESS_KEY_ID;
module.exports.spacesSecretAccessKey = SPACES_SECRET_ACCESS_KEY;
module.exports.spaceEndPoint = SPACE_ENDPOINT;
module.exports.spaceBucket = SPACE_BUCKET;
module.exports.spacePath = SPACE_PATH;

module.exports.userLogModel = USER_LOG_MODEL;
module.exports.smsLogModel = SMS_LOG_MODEL;

module.exports.bcc = BCC;
module.exports.appType = APP_TYPE;

module.exports.smsTempate = SMS_TEMPLATES;