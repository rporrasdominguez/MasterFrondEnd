module.exports = {
    context: path.join(basePath,'src'), //añade a la ruta base la carpeta src

    entry:['./index.js'],

    output:{filename:'main.js'},

    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader',
        }],
    },
}