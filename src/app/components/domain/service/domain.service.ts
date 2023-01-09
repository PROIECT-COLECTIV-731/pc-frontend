import { Injectable } from '@angular/core';
import { BackendService } from 'src/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private backend: BackendService) { }

  public async addDomain(name: String): Promise<String> {
    try {
      var req = await this.backend.post("http://localhost:8080/domain/add", { "name": name }).toPromise();
      return req == "error" ? "error" : "success";
    }
    catch (Exception) {
      return 'error'
    }
  }
  public async getDomains(): Promise<String[]> {
    try {
      var d: String[];
      d=[];
      var req = await this.backend.get("http://localhost:8080/domain/domains", { "name": name }).toPromise();
      for (var i in req) {
        d.push(req[i]["name"])
      }

      return d;
    }
    catch (Exception) {
      return [];
    }
  }
}
