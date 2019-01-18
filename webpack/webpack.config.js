var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var basePath = __dirname;

module.exports = {
    context: path.join(basePath,'src'), //añade a la ruta base la carpeta src

    entry:['@babel/polyfill','./index.js'], //ficheros de entrada

    output:{filename:'bundle.js'}, //fichero de salida

    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader', //loader de babel
        }],
    },

    plugins:[ //area de plugins
        new HtmlWebpackPlugin({ //cargamos el plugin htmlwebpackplugin
            filename:'index.html', //fichero de destino que se colocara en ./dist
            template: 'index.html', //fichero de origen en ./
            hash: true, //Con lo que forzaremos al navegador a refrescar con cada nuevo cambio de la pagina
        }),

    ]
}