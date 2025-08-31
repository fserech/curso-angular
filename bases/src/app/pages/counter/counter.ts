import { Component } from '@angular/core';

@Component({
  templateUrl: './counter.html',
  styleUrls: [
    './counter.css'
  ]
})
export class Counter {
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  decrement() {
    this.counter--;
  }
  reset() {
    this.counter = 0;
  }
  }
