import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import {
  MessageListComponent,
  MessageFormComponent,
  MessageItemComponent
} from "@app/components";
import { HttpClientModule } from "@angular/common/http";
import { ContentService } from "@app/providers/content.service";
import {ApiService} from '@app/providers';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [ContentService, ApiService]
})
export class AppModule {}
