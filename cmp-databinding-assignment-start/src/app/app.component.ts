import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  odds = [];
  evens = [];

  onIntervalFired(num: number) {
    if (num % 2 == 1) {
      this.odds.push(num);
    } else {
      this.evens.push(num);
    }
  }
}
