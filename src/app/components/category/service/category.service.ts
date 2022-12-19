import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private backend:BackendService ) {}

  public async addCategory(name:String):Promise<String>{
    try {
      var req = await this.backend.post("http://localhost:8080/category/add", { "name": name }).toPromise();
      return req == "error" ? "error" : "success";
    }
    catch (Exception) {
      return 'error'
    }
  }
}
