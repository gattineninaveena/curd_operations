import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';
  msg:string = '';


  constructor(private _router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  }

  Login(){
    if(this.email=='user@gmail.com' && this.password== '123456'){
     this.msg = 'Successfully Login';
     this._router.navigate(['dashboard']);
     this.toastr.success('Succsessfully Login!');
    }
    else{
      this.msg = 'Invalid Login';
      console.log(this.msg);
      this.toastr.error('Invalid Credential!', 'Error!'); 
    }
  }

}
