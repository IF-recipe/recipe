/**
 * Created by airnold on 15. 7. 30..
 */

var useModule = {};
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



useModule.express = express;
useModule.path = path;
useModule.favicon = favicon;
useModule.logger = logger;
useModule.cookieParser = cookieParser;
useModule.bodyParser = bodyParser;

module.exports = useModule;


