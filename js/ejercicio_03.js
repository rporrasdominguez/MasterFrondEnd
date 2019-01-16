//Init
//Implementa una funcion init (inmutable), tal que, dado un array coo entrada
//devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
//Array.prototype


const coches = ['renault','bmw','mercedes','audi'];

const init = (array) => {
    array.shift();

    return array;
};

console.log(init(coches));