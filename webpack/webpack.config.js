var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var basePath = __dirname;

module.exports = {
    context: path.join(basePath,'src'), //añade a la ruta base la carpeta src

    entry:{
        app:'./index.js', //Carpeta donde se guardaran los js, siendo index.js el fichero principal

        appStyles:[
            './style.css', //Carpeta donde se guardaran los css, siendo style el fichero principal
        ],
        vendor:[
            '@babel/polyfill', //carga los @babel/polyfill
        ],

    },

    output:{filename:'./js/[name].[chunkhash].bundle.js'}, //fichero de salida

    optimization:{
        splitChunks:{
            cacheGroups:{
               vendor:{ //introduce todas las librerias en vendor y no las duplique en los demas ficheros
                   chunks:'initial',
                   name:'vendor',
                   test:'vendor',
                   enforce:true,
               } 
            }
        }
    },

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
           
        }),

    ]
}