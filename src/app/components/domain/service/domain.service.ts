import { Injectable } from '@angular/core';
import { BackendService } from 'src/backend/backend.service';
import {Observable} from "rxjs";

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
  public readDomains(): Observable<any> {
    return this.backend.get("http://localhost:8080/domain/domains");
  }
}
