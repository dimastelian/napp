;(function() {
    'use strict';

    const Controller = R.core('Controller');

    class TestController extends Controller.BaseController {

        testMethod(req, res, next)
        {
            // this.res(new Controller.ResponseDefault("COOL!"));
            return this.res.send("Hello World!");
        }
    }

    module.exports = TestController;

}());
