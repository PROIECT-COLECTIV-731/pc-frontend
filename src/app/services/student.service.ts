import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from "../shared/data-type/Student";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  searchOption: any[] = []
  public students: Student[] = []
  postUrl : string = "http://localhost:8080/user/get-all";

  constructor(
    private http: HttpClient
  ) { }


  getStudents(): Observable<Student[]>{
    // this.http.get<Student[]>(this.postUrl).subscribe(students => { console.log(students)});
    return this.http.get<Student[]>(this.postUrl);
  }

  filteredListOptions() {
    let students = this.students;
    let filteredStudentsList = [];
    for (let student of students) {
      for (let options of this.searchOption) {
        if (options === student.username) {
          filteredStudentsList.push(student);
        }
      }
    }

    if(filteredStudentsList.length == 0) {
      let noSuchStudent : Student = {
        id: -1,
        username: "No such student exists"
      };
      filteredStudentsList.push(noSuchStudent);
    }

    return filteredStudentsList;
  }
}
