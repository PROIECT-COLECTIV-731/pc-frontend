import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private backend: BackendService) { }


public async addBook(author: String, title: String, year: number, isbn: number, domain: number, publisher: number, category: number, summary: String, ranking: number): Promise<String> {
    try {
      console.log("\"author\":"+ author, "title:"+ title, "publicationYear:" +year, "domain:"+ domain, "publisher:" +publisher, "bookCategories:"+ category, "summary:"+ summary, "ranking:"+ ranking ,"isbn:"+isbn,"")
      var req = await this.backend.post("http://localhost:8080/books/add", { "author": author, "title": title, "publicationYear": year, "domain_id": domain, "publisher_id": publisher, "book_category": category, "summary": summary, "ranking": ranking ,"isbn":isbn}).toPromise();
      console.log(req);
      return req == "error" ? "error" : "success";
    }
    catch (Exception) {
      return 'error'
    }
  }

}
