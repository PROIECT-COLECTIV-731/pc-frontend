import {Component, OnInit} from "@angular/core";
import {BookTableComponent} from "../menu/book-table/book-table.component";
import {Router} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  email : string = ""
  isAdmin : boolean = false
  isStudent : boolean = false
  ref: DynamicDialogRef | undefined;

  constructor(private router : Router, public dialogService: DialogService, private studentService: StudentService) { }

  ngOnInit(): void {
    if (localStorage.getItem('email') != null){
      let adminRegEx = new RegExp('^[a-zA-Z|\.]*@ubbcluj.ro')
      let studentRegEx = new RegExp('^[a-zA-Z|\.]*@stud.ubbcluj.ro')
      this.email = localStorage.getItem('email')!
      if (adminRegEx.test(this.email)){
        //an admin has logged in right here
        this.isAdmin = true
        this.initializeStudentTable();
      }
      else if (studentRegEx.test(this.email))
      {
        this.isStudent = true;
        this.initializeStudentTable();
      }
    }
  }

  initializeStudentTable() {
    this.studentService.getStudents().subscribe(students => {
      this.studentService.students = students
    });
  }

  showBookStudentDialog() {
    this.ref = this.dialogService.open(BookTableComponent, {
      header: 'Books',
      width: '70%'
    });
  }

  goHome() {
    this.router.navigate(['/menu']);
  }

  onSelectedOption(e: any) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    let students = []
    if (this.studentService.searchOption.length > 0)
      students = this.studentService.filteredListOptions();
    else {
      students = this.studentService.students;
    }

    console.log(students)
  }
}
