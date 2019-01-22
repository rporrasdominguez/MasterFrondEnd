import './styles.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { HelloComponent } from './hello.jsx';



console.log('Hello from Parcel');

let sampleNumber: number = null;
sampleNumber = 6;
console.log(`The number choise is ${sampleNumber}`);


 ReactDom.render(
     <HelloComponent/>,
     document.getElementById('root')
 )