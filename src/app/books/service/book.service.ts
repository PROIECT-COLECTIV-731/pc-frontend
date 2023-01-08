import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BackendService} from "../../services/backend.service";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient, public backendService:BackendService) { }

  public readBooks(): Observable<any> {
    return this.backendService.get("http://localhost:8080/books/books");
  }

}
