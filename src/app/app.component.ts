import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weight: number = 0;
  height: number = 0;
  bmi: number = 0;
  constructor() { }

  calculateBmi(): void {
    this.bmi = this.weight / (this.height * this.height);
  }
}
