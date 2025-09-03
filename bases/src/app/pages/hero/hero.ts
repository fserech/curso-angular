import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
    imports: [UpperCasePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

 name = signal('Ironman');
  age = signal(45);

getHeroDescription() {
  return `${ this.name() } - ${ this.age() }`;
}
changeHero() {
  this.name.set('Spiderman');
  this.age.set(22);
}

changeAge() {
  this.age.set(60);
}
resetForm() {
  this.name.set('Ironman');
  this.age.set(45);
}

}
