import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FileuploadComponent } from './component/fileupload/fileupload.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'home', component : HomeComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  {path : 'fileupload', component:FileuploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }