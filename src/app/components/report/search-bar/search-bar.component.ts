import { Component, OnInit, ViewChild, ElementRef,EventEmitter,Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {Student} from "../../../shared/data-type/Student";
import {StudentService} from "../../../services/student.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  myControl = new FormControl();
  // @ts-ignore
  filteredOptions: Observable<string[]>;
  allStudents: Student[] = [];
  autoCompleteList: any[] = [];

  @ViewChild('autocompleteInput') autocompleteInput: ElementRef | undefined;
  @Output() onSelectedOption = new EventEmitter();

  constructor(
    public studentService: StudentService
  ) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(students => {
      this.allStudents = students

    });

    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    })
  }

  private autoCompleteExpenseList(input: any) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val: any) {
    var categoryList = []
    if (typeof val != "string") {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allStudents.filter(s => s.username.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allStudents;
  }

  displayFn(student: Student) {
    // let k = student ? student.username : student;
    return student.username;
  }

  filterPostList(event:any) {
    var students= event.source.value;
        if(!students) {
          this.studentService.searchOption=[]
        }
        else {
          console.log("not")

            // @ts-ignore
          this.studentService.searchOption.push(students);
            this.onSelectedOption.emit(this.studentService.searchOption)
        }

        this.focusOnPlaceInput();
  }


  removeOption(option:any) {

    // @ts-ignore
    let index = this.studentService.searchOption.indexOf(option);
    if (index >= 0)
        this.studentService.searchOption.splice(index, 1);
        this.focusOnPlaceInput();

        this.onSelectedOption.emit(this.studentService.searchOption)
}

focusOnPlaceInput() {
  this.autocompleteInput!.nativeElement.focus();
  this.autocompleteInput!.nativeElement.value = '';
}


}
