/**
 * Created by airnold on 15. 7. 30..
 */

exports.middlewareSetting = function(app, serverModule){
    // view engine setup
    app.set('port', process.env.PORT || 2020);
    app.set('views', serverModule.path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    // uncomment after placing your favicon in /public
    //app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(serverModule.logger('dev'));
    app.use(serverModule.bodyParser.json());
    app.use(serverModule.bodyParser.urlencoded({ extended: false }));
    app.use(serverModule.cookieParser());
    app.use(serverModule.express.static(serverModule.path.join(__dirname, '../public')));
};