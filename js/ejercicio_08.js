//Merge
//Implementa una funcion merge que, dados dos objetos de entrada
// source y target, devuelva un nuevo objeto con todas las 
//propiedades de target y de source, y en caso de propiedades
//con el mismo nombre, source sobreescriba a target.

const person1 = {
    name: 'Maria',
    surname:'Ibañez',
    country:'SPA',
}

const person2 = {
    name: 'Luisa',
    age:31,
    married:true,
}

function merge(source,target){
    source = {...target,...source};
    return source;
}

console.log(merge(person1,person2));