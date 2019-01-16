//Implementa una funcion concat (inmutable) tal que, dados 2 arrays
//como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators


const coches = ['renault','bmw','mercedes','audi'];
const camiones =['pegaso','iveco','man','scania'];

const concat = (array_1,array_2) =>{
    const vehiculos = [...array_1,...array_2];
    
    return vehiculos;
};

console.log(concat(coches,camiones));