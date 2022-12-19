import { Component, OnInit } from '@angular/core';
import { PublisherService } from './service/publisher.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent implements OnInit {

  title: String | undefined;
  error: String | undefined;
  success:String|undefined;
  constructor(private service: PublisherService) { }

  async addPublisher(name: String | undefined) {
    if (name) {
      var response = await this.service.addPublisher(name);
      if (response == "error") {
        this.error = "Error! This publisher was already added!"
        this.success = undefined;
      }
      else {
        this.success = "Success!"
        this.error = undefined;
      }
    }
    else {
      this.error = "Error! Please enter a publisher name before submitting."
      this.success = undefined;

    }
  }

  ngOnInit(): void {
  }

}
