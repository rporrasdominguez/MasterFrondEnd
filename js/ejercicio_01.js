//Head
//Implementa una funcion head (inmutable), tal que, dado un array como entrada
//extraiga y devuelva su primer elemento. Utiliza destructuring

const coches = ['renault','bmw','mercedes','audi'];

const head = (array) => {
  let [first] = array;
  return first;
}
;

console.log(head(coches));