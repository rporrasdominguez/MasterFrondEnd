import logo from './content/logo_1.png';


const img = document.createElement('img');
img.src = logo;
document.getElementById('imgContainer').appendChild(img);


const numbers = [1,3,4,5,7];

let [firstPosition] = numbers;

console.log(firstPosition);


