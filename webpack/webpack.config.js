var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var basePath = __dirname;

module.exports = {
    context: path.join(basePath,'src'), //añade a la ruta base la carpeta src

    entry:['@babel/polyfill','./index.js','./style.css'], //ficheros de entrada

    output:{filename:'bundle.js'}, //fichero de salida

    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader', //loader de babel
        },
        {
            test: /\.css$/, //analiza los ficheros css
            exclude: /node_modules/, //no mires en la carpeta node_modules
            use:[ //al usar mas de un loader usaremos use y en su interior los distintos loader
                {
                    loader:'style-loader', //Nos coge los estilos del js bundle y no incrusta en la cabecera del html
                  
                },
                {
                    loader: 'css-loader', //loader que maneje el css y lo introduce en el js
                },
            ] 
        },
    ],
    },

    plugins:[ //area de plugins
        new HtmlWebpackPlugin({ //cargamos el plugin htmlwebpackplugin
            filename:'index.html', //fichero de destino que se colocara en ./dist
            template: 'index.html', //fichero de origen en ./
            hash: true, //Con lo que forzaremos al navegador a refrescar con cada nuevo cambio de la pagina
        }),

    ]
}