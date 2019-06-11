import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ContentService {
  constructor(private api: ApiService) {}

  getContentFromUrl(url): Observable<any> {
    return this.api.post("/contentFromUrl", { url: url });
  }
}
