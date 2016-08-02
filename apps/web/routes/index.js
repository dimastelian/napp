;(function() {
    'use strict';

    const Routes = R.core('Routes');

    if(!R.app)
        throw new Error('The express app instance must be set in R.app! (e.g. R.app = express(); )');

    // routes that need to be set/loaded before autoload go here
    // r.app.use(require('./load_me_first'));

    Routes.autoload(__dirname, function(router){
        R.app.use(router);
    });

    // routes that need to be set/loaded after autoload go here
    // r.app.use(require('./load_me_last'));

}());
