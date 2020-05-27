const $ = require('jquery');
$('body').css('background-color', 'green');


const sayHello = (name) => `Hello, ${name}!`;
console.log(sayHello("michael"));

import{hello} from './say-hello';
console.log(hello);