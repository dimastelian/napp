;(function() {
    'use strict';

    var express = require('express');
    var router = express.Router();

    const Controller = R.core('Controller');
    const Route = R.core('Routes');

    // provider must be a object that has METHOD functions (get, post, put, delete, dispatch, etc)
    // the express router meets this requirement and can be used as is.
    // each method must receive at least 2 arguments. E.g. Route.provider.get = function(request, response, next)
    Route.provider = router;

    // plain function
    Route.get('/func_test', function(req,res,next){
        res.send('func_test works!');
    });

    // [Controller, controllerMethod(req,res,next)]
    Route.get('/controller_test1', [Controller.Web.TestController, 'testMethod']);

    // Controller, controllerMethod(req,res,next)
    Route.get('/controller_test2', Controller.Web.TestController, 'testMethod');

    // use the express router directly to call a controller.
    router.get('/from_express_router', function(req, res, next) {
        // the controller is autoloaded into the Web "namespace" using the Controller.autoload() function
        Controller.call(Controller.Web.TestController, 'testMethod', req, res, next);
    });

    module.exports = router;
}());
