import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  students = [];
  studId;
  studData = {};
  showForm : boolean = false;
  editBtn : boolean = false;

  constructor(
    private route : ActivatedRoute, 
    private studSrv : StudentService, 
    private router : Router,
    private toastr: ToastrService
  ) { }


  ngOnInit() {
    this.studSrv.studentList().subscribe(
      (res) => {
        this.students = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getStudentData(id) {
    this.studSrv.singleStudent(id).subscribe(
      (res) => {
        // console.log(res);
        this.studData = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }


  addStudent() {
    // console.log(this.studData);
    this.studSrv.createStudent(this.studData).subscribe(
      (res) => {
        console.log('Done');
        this.toastr.success('Student Added Successfully!');
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
        this.toastr.error('Something went wrong!', 'Error!');        
      }
    )
    
  }

  editStudent(id) {
    this.studSrv.updateStudent( id, this.studData ).subscribe(
      (res) => {
        this.ngOnInit();
        this.toastr.success('Student Updated Successfully!');
      },
      (err) => {
        console.log(err);
        this.toastr.error('Something went wrong!', 'Error!');
        
      }
    )
  }

  deleteStud(id) {
    // console.log(id);

    this.studSrv.deleteStudent(id).subscribe(
      (res) => {
        console.log('Deleted');
        this.ngOnInit();
        this.toastr.success('Student Deleted!');

      },
      (err) => {
        console.log(err);
        this.toastr.error('Something went wrong!', 'Error!');

      }
    )
  }

}
