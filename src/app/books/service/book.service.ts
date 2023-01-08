import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BackendService} from "../../backend/backend.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient, public backendService:BackendService) { }

  public readBooks(): Observable<any> {
    return this.backendService.get("http://localhost:4201/books/books");
  }
  public readDomains(): Observable<any> {
    return this.backendService.get("http://localhost:4201/books/domains");
  }
  public readPublishers(): Observable<any> {
    return this.backendService.get("http://localhost:4201/books/publishers");
  }
}
