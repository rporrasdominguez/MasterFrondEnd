//Clone
//Implementa una funcion clone que, a partir de un objeto de entrada source
//devuelva un nuevo objeto con las propiedades de source:

const coche = {
    puertas: 2,
    color: 'rojo',
    ruedas: 4,
    marca: 'Opel',
}


function clone(source){
    const clone = {...source};

    return clone;
}

console.log(clone(coche));