import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home2Component } from './home2/home2.component';
import { ToastrComponent } from './toastr/toastr.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'register', component:RegistrationComponent},
  {path: 'dashboard', component:Home2Component},
  { path : 'home', component : Home2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
