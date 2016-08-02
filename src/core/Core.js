;(function() {
    'use strict';

    var appRoot = require('app-root-path');
    var path = require('path');

    class Core {

        get require()
        {
            return util.require
        }

        core(module)
        {
            return this.require('src/core/'+module);
        }

        initApp(name, app_path)
        {

            this.src = (module) => {
                return R.require(path.join(app_path, 'src', module|| '/'));
            }

            this.routes = (module) => {
                return R.require(path.join(app_path, 'routes', module || '/'));
            }

            this.controllers = (module) => {
                return R.require(path.join(app_path, 'src/controllers', module || '/'));
            }

            this.resources = (module) => {
                return R.require(path.join(app_path, 'resources', module|| '/'));
            }

            this.views = (module) => {
                return R.require(path.join(app_path, 'resources/views', module|| '/'));
            }

            this.config = (module) => {
                return R.require(path.join(app_path, 'config', module|| '/'));
            }

            this.app = (module) => {
                return R.require(path.join(app_path, module|| '/'));
            }
        }
    }

    var util = {
        root: appRoot.path,
        require: appRoot.require,

        buildPaths: function()
        {
            console.log(this.root);
        }

    };

    module.exports = {
        Class: Core,
        Util: util,
    };

}());
