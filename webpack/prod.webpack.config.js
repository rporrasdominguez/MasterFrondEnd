const merge = require('webpack-merge');
const common = require('./base.webpack.config.js');

module.exports = merge(common, {
    mode: 'production',
});