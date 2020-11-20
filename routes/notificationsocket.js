/**************************************************
 *               Notification Socket              *
 **************************************************/

var common = require('../config/common');
const logger = require('../config/logger');

var notificationsocket = function (io) {
    io.on('connection', (socket) => {
        logger.logInfo('Client Connected');
        socket.on('newNotification', function (obj) {
            console.log(obj);
            io.emit('newNotification', obj);// Send to all including sender
            //socket.emit('newNotification', obj);// Send to sender only
            //socket.broadcast.emit('newNotification', obj);// Send to all except sender
        })
    });

}


module.exports = notificationsocket;