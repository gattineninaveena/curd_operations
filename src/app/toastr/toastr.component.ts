import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor( private toastr: ToastrService ) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showInfo() {
    this.toastr.info('Hello world!', 'Toastr fun!');
  }

  showWarning() {
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }

  showError() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }

}
