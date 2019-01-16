//Tail
//Implementar una funcion tail (inmutable), tal que, dado un array como entrada
//extraiga y devuelva todos menos el primer elemento.Utiliza rest operator


const coches = ['renault','bmw','mercedes','audi'];

const tail = (array) => {
    const [first, ...rest] = array; 

    return rest;
};


console.log(tail(coches));
