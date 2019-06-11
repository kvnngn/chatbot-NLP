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
  private message: Message;

  @Input("messages")
  private messages: Message[];

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
    console.log(this.message.content);
    this.contentService
      .getContentFromUrl(this.message.content)
      .subscribe(res => {
        console.log(res);
      });
    this.message.timestamp = new Date();
    this.message = new Message("", "assets/images/user.png");
    this.messages.push(
      new Message("", "assets/images/bot.png", this.message.timestamp)
    );
  }
}
