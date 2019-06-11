import { Component } from "@angular/core";
import { Message } from "@app/models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public message: Message;
  public messages: Message[];

  constructor() {
    this.message = new Message("", "assets/images/user.png");
    this.messages = [
      new Message(
        "Welcome, I am Kevin your assistant, need a help to get the main subject on a website ? Just send me the link.",
        "assets/images/bot.png",
        new Date()
      )
    ];
  }
}
