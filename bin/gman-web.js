;(function() {
    'use strict';

    const program = require('commander');
    const Core = require('../src/core/Core');

    program
      .option('-e, --env <ENV>', 'Set Environment', "production")
      .option('-p, --port <PORT>', 'Run API Server on this port. Default is 3000', 3000)
      .parse(process.argv);

    var pkgs = program.args;

    process.env.WEB_PORT = parseInt(program.port);
    process.env.WEB_ENV = program.env;

    global.R = new Core.Class();

    R.require('apps/web/bin');

}());
