;(function() {
    'use strict';

    const program = require('commander');
    const Core = require('../src/core/Core');

    program
      .option('-e, --env <ENV>', 'Set Environment', "production")
      .option('-p, --port <PORT>', 'Run API Server on this port. Default is 3010', 3010)
      .parse(process.argv);

    var pkgs = program.args;

    process.env.API_PORT = parseInt(program.port);
    process.env.API_ENV = program.env;

    global.R = new Core.Class();

    R.require('apps/api/bin');

}());
