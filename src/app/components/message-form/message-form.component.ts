import { Component, OnInit, Input } from "@angular/core";
import { Message } from "@app/models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ContentService } from "@app/providers/content.service";

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.scss"]
})
export class MessageFormComponent implements OnInit {
  @Input("message")
  message: Message;

  @Input("messages")
  messages: Message[];

  constructor(
    private http: HttpClient,
    private contentService: ContentService
  ) {}

  ngOnInit() {}

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);
    this.botReply();
  }

  public botReply() {
    this.contentService.getContentFromUrl(this.message.content).subscribe(
      stats => {
        console.log(stats);
        if (stats.length > 0) {
          this.message.timestamp = new Date();
          let answer = "";
          stats.forEach((stat, i) => {
            answer += i + 1 + ". " + stat.token + ": " + stat.stat + " %\n";
          });
          this.messages.push(
            new Message(
              "Here, the most interesting topics about the website:\n" + answer,
              "assets/images/bot.png",
              this.message.timestamp
            )
          );
        }
      },
      err => {
        console.log(err);
        this.message.timestamp = new Date();
        this.messages.push(
          new Message(
            "Sorry, but the message doesn't contain any valid link. Please just send me the link.",
            "assets/images/bot.png",
            this.message.timestamp
          )
        );
      }
    );
    this.message = new Message("", "assets/images/user.png");
  }
}
