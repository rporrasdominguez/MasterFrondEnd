var path = require('path');
var basePath = __dirname;

module.exports = {
    context: path.join(basePath,'src'), //añade a la ruta base la carpeta src

    entry:['./index.js'],

    output:{filename:'bundle.js'},

    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader',
        }],
    },
}