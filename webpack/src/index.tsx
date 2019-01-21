//import logo from './content/logo_1.png';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloWorld} from './hello';

var logo = require('./content/logo_1.png');


const img = document.createElement('img');
img.src = logo;
img.id ='logo';
document.getElementById('imageContainer').appendChild(img);


const numbers = [1,3,4,5,7];

let [firstPosition]  = numbers;

console.log(firstPosition);

const sentence = 'Esto es una frase chorra';

console.log(sentence);


ReactDOM.render(
   
    <HelloWorld/>,
  

    document.getElementById('app')
);

