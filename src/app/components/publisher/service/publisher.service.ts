import { Injectable } from '@angular/core';
import { BackendService } from 'src/backend/backend.service';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  constructor(private backend:BackendService ) {}

  public async addPublisher(name:String):Promise<String>{
    try {
      var req = await this.backend.post("http://localhost:8080/publisher/add", { "name": name }).toPromise();
      return req == "error" ? "error" : "success";
    }
    catch (Exception) {
      return 'error'
    }
  }
  public readPublishers(): Observable<any> {
    return this.backend.get("http://localhost:8080/publisher/publishers");
  }
}
