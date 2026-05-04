import { Component } from '@angular/core';
import { Student } from '../Services/student';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
  student = {
    name : '',
    age : '',
    course : ''
  };

  constructor(private StudentService : Student, private router : Router){}

  addStudent(){
    this.StudentService.addStudent(this.student);
    alert("Student added successfully !!");

    this.student = {name : '', age : '', course: ''};

    this.router.navigate(['/List']);
  }
}
