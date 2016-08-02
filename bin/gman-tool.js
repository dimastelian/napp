;(function() {
    'use strict';

    const program = require('commander');
    const Core = require('../src/core/Core');

    program
      .option('-e, --env <ENV>', 'Set Environment', "production")
      .parse(process.argv);

    var pkgs = program.args;

    process.env.ENV = program.env;

    global.R = new Core.Class();

    const Controller = R.core('Controller');

    var c1 = new Controller.BaseController({},{},{});

    Controller.register('c1', c1);

    Controller.call(Controller.BaseController, 'test', {},{},{});

    require('./test');

}());
