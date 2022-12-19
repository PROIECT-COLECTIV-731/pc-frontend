import {Component, OnInit} from "@angular/core";
import {BookTableComponent} from "../menu/book-table/book-table.component";
import {Router} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {StudentService} from "../../services/student.service";
import {Student} from "../../shared/data-type/Student";
import {StudentBookTableComponent} from "./student-book-table/student-book-table.component";
import {MatDialog} from "@angular/material/dialog";

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

  constructor(private router : Router,
              public dialogService: DialogService,
              public matDialogService: MatDialog,
              private studentService: StudentService) { }

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
     this.dialogService.open(BookTableComponent, {
      header: 'Books',
      width: '70%'
    });
  }

  goHome() {
    this.router.navigate(['/menu']);
  }

  onSelectedOption(e: any) {
    this.getFilteredExpenseList();
    if(this.studentService.searchOption.length > 0)
    {
      console.log("apelam api pt student: ");
      console.log(this.studentService.searchOption[0]);
      this.showBooksForStudent(this.studentService.searchOption[0]);
    }
    this.studentService.searchOption = [];
  }

  showBooksForStudent(student: Student){
    this.matDialogService.open(StudentBookTableComponent, {
      width: '70%',
      data: student
    });
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
