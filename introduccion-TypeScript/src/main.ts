import './style.css'
//import './topics/1-basic-types.ts';
//import './topics/02-objet-interface.ts';
//import './topics/04-homework-types';
//import './topics/05-basic-destructuring';
//import './topics/06-funtion-destructuring';
//import './topics/07-import-export';
//import './topics/08-classes';
import './topics/09-generics';

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `Hola mundo TypeScript!`;
