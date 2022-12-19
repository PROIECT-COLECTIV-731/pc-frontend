import { Injectable } from '@angular/core';
import { BackendService } from 'src/backend/backend.service';

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
}
