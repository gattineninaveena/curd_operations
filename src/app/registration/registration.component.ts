import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators, FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  
 
 
  pwd:number;
  cpwd:number;

  constructor(private _router: Router, 
              private formBuilder: FormBuilder, 
              private toastr: ToastrService) {
   
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
  });
   
  }

  get f() { return this.registerForm.controls; }

  register() {
      this.submitted = true;
      
      if(this.registerForm.valid) {

        if(this.pwd === this.cpwd)
        {
        this._router.navigate(['']);
        this.toastr.success('Succsessfully Registered!');
        }
        else
        this.toastr.error('Password Should Same!', 'Error!');
      }
      else{
        this.toastr.error('Required Fields', 'Error!');
      }

  }

 

 


}
