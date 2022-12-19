import { Component, OnInit } from '@angular/core';
import { DomainService } from './service/domain.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {

  title: String | undefined;
  error: String | undefined;
  success: String | undefined;
  constructor(private service: DomainService) { }

  async addDomain(name: String | undefined) {
    if (name) {
      var response = await this.service.addDomain(name);
      if (response == "error") {
        this.error = "Error! This domain was already added!"
        this.success = undefined;
      }
      else {
        this.success = "Success!"
        this.error = undefined;
      }
    }
    else {
      this.error = "Error! Please enter a domain name before submitting."
      this.success = undefined
    }
  }
  ngOnInit(): void {
  }

}
