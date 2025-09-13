import { Routes } from '@angular/router';
import path from 'path';
import { Counter } from './pages/counter/counter';
import { Hero } from './pages/hero/hero';
import { Dragonball } from './pages/dragonball/dragonball';


export const routes: Routes = [
  {
    path: '',
    component: Counter
  },
{
  path: 'hero',
  component: Hero
},
{
  path: 'dragonball',
  component: Dragonball
},
// Redireccionamiento al inicio si la ruta no existe
{
  path: '**',
  redirectTo: ''
}
];
