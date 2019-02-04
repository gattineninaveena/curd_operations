import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  mainUrl = 'http://localhost:3000/students';

  constructor( private http : HttpClient ) { }

  createStudent(student) {
    return this.http.post<any>(this.mainUrl, student);
  }

  studentList() {
    return this.http.get<any>(this.mainUrl);
  }

  singleStudent(id) {
    return this.http.get<any>(this.mainUrl+'/'+id);
  }

  updateStudent(id, student) {
    return this.http.put(this.mainUrl+'/'+id, student);
  }

  deleteStudent(id) {
    return this.http.delete(this.mainUrl+'/'+id);
  }

}
