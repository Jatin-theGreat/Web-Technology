import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  students: any[] = [];

  getStudents(){
    return this.students;
  }

  addStudent(student: any){
    this.students.push(student);
  }

  deleteStudent(index : number){
    this.students.splice(index, 1);
  }

  updateStudent(index:number, student: any){
    this.students[index] = student;
  }
}
