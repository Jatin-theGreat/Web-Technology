import { Component } from '@angular/core';
import { Student } from '../Services/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-student',
  imports: [FormsModule],
  templateUrl: './list-student.html',
  styleUrl: './list-student.css',
})
export class ListStudent {
  students: any[] = [];
  editIndex: number = -1;

  updatedStudent = {
    name: '',
    age: '',
    course: ''
  };

  constructor(private StudentService : Student){}

  ngOnInit(){
    this.students = this.StudentService.getStudents();
  }

  deleteStudent(index: number){
    this.StudentService.deleteStudent(index);
  }

  editStudent(index: number){
    this.editIndex = index;
    this.updatedStudent = {...this.students[index]};
  }

  updateStudent(){
    this.StudentService.updateStudent(this.editIndex, this.updatedStudent);
    this.editIndex = -1;
  }
}
