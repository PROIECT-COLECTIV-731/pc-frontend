import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private backend: BackendService) { }

  public async addCategory(name: String): Promise<String> {
    try {
      var req = await this.backend.post("http://localhost:8080/category/add", { "name": name }).toPromise();
      return req == "error" ? "error" : "success";
    }
    catch (Exception) {
      return 'error'
    }
  }

  public async getCategories(): Promise<String[]> {
    try {
      var c: String[];
      c=[];
      var req = await this.backend.get("http://localhost:8080/category/categories", { "name": name }).toPromise();
      for (var i in req) {
        c.push(req[i]["name"])
      }

      return c
    }
    catch (Exception) {
      return [];
    }
  }
}
