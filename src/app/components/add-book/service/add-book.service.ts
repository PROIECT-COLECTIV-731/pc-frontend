import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private backend: BackendService) { }


public async addBook(author: String, title: String, year: number, isbn: number, domain: String, publisher: String, category: String[], summary: String, link: String): Promise<String> {
    try {
      console.log(category);
      console.log("author:"+ author, "title:"+ title, "publicationYear:" +year, "domain:"+ domain, "publisher:" +publisher, "bookCategories:"+ category, "summary:"+ summary,"isbn:"+isbn,"link:"+link)
      var req = await this.backend.post("http://localhost:8080/books/add", {    "ISBN":isbn,"author":author, "title":title, "publicationYear":year, "domain":{"name":domain}, "publisher":{"name":publisher},"bookCategories":category, "summary":summary,"contentLink":"http"}).toPromise();
      console.log(req);
      return req == "error" ? "error" : "success";
    }
    catch (Exception) {
      console.log(Exception);
      return 'error'
    }
  }

}
