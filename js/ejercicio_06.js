//Opcional
//Implementa una version del ejercicio anterior donde se acepten múltiples
//arrays (más de 2).

const coches = ['renault','bmw','mercedes','audi'];
const camiones =['pegaso','iveco','man','scania'];
const motos = ['ducati','ktm','honda','yamaha'];

const concat = (...args) =>{
    let array = args.map( (elemento) => [array,...elemento]);

    return array;

};

console.log(concat(coches,camiones));

