import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link-viewer',
  templateUrl: './link-viewer.component.html',
  styleUrls: ['./link-viewer.component.css']
})
export class LinkViewerComponent implements OnInit {

  @Input()
  link: string = ''


  @Output() btnClick = new EventEmitter();

  constructor() { 

  }
  
  ngOnInit(): void {
   
  }

  onClick() {
    //this.link  = 'https://drive.google.com/file/d/0Byd9s-7-NCIiUzM5WW9ReGxEQ2s/preview';
    document.body.innerHTML = '<div id="myDiv"><div>'
    let myContainer = <HTMLElement> document.querySelector("#myDiv");
    myContainer.innerHTML = "<button onClick='history.go(0)'>Return to Menu</button><div class=\"pdf-container\"> <embed src=\"" + this.link + "\" height=\"1000\" width=\"100%\" /> </div>";
    this.btnClick.emit();
  }
}
