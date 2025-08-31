import { Component, signal } from '@angular/core';
@Component({
  templateUrl: './counter.html',
  styleUrls: ['./counter.css']
})
export class Counter {
  counter = 10;// Variable normal
   counterSignal = signal(10); // Signal (reactivo)

  // Incremento
  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  // Decremento
  decrement() {
    this.counter--;
    this.counterSignal.update((current) => current - 1);
  }

  // Reset
  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}

