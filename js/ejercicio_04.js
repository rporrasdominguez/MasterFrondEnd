//Last
//Implementa una funcion last (inmutable), tal que, dado un array como entrada
//devuelva el último elemento.


const coches = ['renault','bmw','mercedes','audi'];

const last = (array) => {
    return array.slice(-1);
};

console.log(last(coches));