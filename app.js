
var serverModule = require('./server_setting/modules_use');

var app = serverModule.express();

var middleWare = require('./server_setting/middleware_use');

var routing = require('./server_setting/route_use');

var errorHandling = require('./server_setting/errorhandling_use');

var serverSetting = require('./server_setting/server_use');

var model = require('./model/mongoConfig');
/**
 * middleware setting
 */

middleWare.middlewareSetting(app, serverModule);

/**
 * routes setting
 */

routing.routeSetting(app);

/**
 * errorhandling setting
 */

errorHandling.errorSetting(app);

/**
 * server Start
 */

serverSetting.serverStart(app);

module.exports = app;
