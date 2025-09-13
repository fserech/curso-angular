import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
})
export class Dragonball{

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 1500 },
    { id: 2, name: 'Vegeta', power: 1400 },
    { id: 3, name: 'Trunks', power: 1300 },
  ]);

}
