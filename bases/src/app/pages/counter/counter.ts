import { Component, signal } from '@angular/core';
@Component({
  templateUrl: './counter.html',
  styleUrls: ['./counter.css']
})
export class Counter {
  counter = 10;// Variable normal
   counterSignal = signal(10); // Signal (reactivo)


  increaseBy(value: number) { // Incremento
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  decrement() {  // Decremento
    this.counter--;
    this.counterSignal.update((current) => current - 1);
  }

  // Reset
  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}

