var TradeOfferManager = require('steam-tradeoffer-manager');

// ensure that R is loaded
require('../util/R');

R.initCustomApp('csbot', 'apps/csbot', [
    'src',  // R.src('module/from/src');
    'app',
    'config',
    'resources',
    {name: 'foo', path: 'foo'} // R.foo('test') => require('/path/foo/test');
]);
