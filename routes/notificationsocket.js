/**************************************************
 *               Notification Socket              *
 **************************************************/

var common = require('../config/common');
const logger = require('../config/logger');

var notificationsocket = function (io) {
    io.on('connection', (socket) => {
        logger.logInfo('Client Connected');
        socket.on('newNotification', function (obj, callback) {
            console.log(obj);
            callback(obj);
            socket.broadcast.emit('newNotification', obj);
        })
    });

}


module.exports = notificationsocket;