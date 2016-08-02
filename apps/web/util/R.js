;(function() {
    'use strict';

    if(!global.R)
    {
        var appRoot = require('app-root-path');

        const Core = appRoot.require('src/core/Core');
        global.R = new Core.Class();
    }
    
}());
