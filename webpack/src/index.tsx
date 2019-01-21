//import logo from './content/logo_1.png';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloWorld} from './hello.jsx';

var logo = require('./content/logo_1.png');


const img = document.createElement('img');
img.src = logo;
img.id ='logo';
document.getElementById('imageContainer').appendChild(img);


const numbers : number []= [1,3,4,5,7];

let [firstPosition]  = numbers;

console.log(firstPosition);

const sentence :String = 'Esto es una frase chorra';

console.log(sentence);

ReactDOM.render(
    <div>
        <HelloWorld/>
    </div>
);

