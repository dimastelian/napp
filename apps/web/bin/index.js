;(function() {
    'use strict';

    // ensure R is loaded
    require('../util/R');

    R.initApp('web', 'apps/web');

    if(!process.env.WEB_PORT)
        process.env.WEB_PORT = 3000;

    if(!process.env.WEB_ENV)
        process.env.WEB_ENV = 'production';

    const express = require('express');

    var app = express();

    // save the app instance into R. the routes init requires it (see /apps/web/routes/index.js)
    R.app = app;

    // load the controllers module (will call controllers/index)
    R.controllers();

    // load the routes module (will call routes/index)
    R.routes();

    app.listen(process.env.WEB_PORT, function(){
        console.log("Web App Running on Port: "+process.env.WEB_PORT);
        console.log("Environment: "+process.env.WEB_ENV);

    });

}());
