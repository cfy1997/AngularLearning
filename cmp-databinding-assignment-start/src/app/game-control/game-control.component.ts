import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  gameInterval;
  num = 1;

  constructor() {}

  ngOnInit() {}

  onStartGame() {
    this.gameInterval = setInterval(() => {
      this.intervalFired.emit(this.num);
      this.num++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.gameInterval);
  }
}
