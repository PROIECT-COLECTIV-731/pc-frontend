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

  public async getPublisher(): Promise<String[]> {
    try {
      var p: String[];
      p=[];
      var req = await this.backend.get("http://localhost:8080/publisher/publishers", { "name": name }).toPromise();
      for (var i in req) {
        p.push(req[i]["name"])
      }

      return p;
    }
    catch (Exception) {
      return [];
    }
  }
}
