;(function() {
    'use strict';

    const Controller = R.core('Controller');

    // loads all *Controller.js files in the __dirname directory
    // afterwards, the loaded controllers can be accessed from Controller.NAMESPACE.NAME
    // e.g. loading 'MainController.js' with Controller.autoload('Main', __dirname)
    //          => var controller = new Controller.Main.MainController()

    Controller.autoload("Web", __dirname, function(controller, info, file){
        //
    });

}());
