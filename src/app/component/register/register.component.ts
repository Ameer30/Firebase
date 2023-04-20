import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;
  email1: string ="";
  password1 : string="";
  
constructor(private formBuilder:FormBuilder,private auth : AuthService){
}

ngOnInit(){
  this.registerForm = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
}
submitted = false;
onSubmit(){ 

  this.submitted = true;
  
  if(this.registerForm.invalid){
    return;
  }

  alert("Success");
  console.log(this.registerForm.value.email)
  console.log(this.registerForm.value.password)
  

    this.auth.register(this.email1,this.password1);
    
    this.email1 = '';
    this.password1 = '';
}
  

}



  // constructor(private auth : AuthService) { }

  // ngOnInit(): void {
  // }
  // register() {

  //   if(this.email == '') {
  //     alert('Please enter email');
  //     return;
  //   }

  //   if(this.password == '') {
  //     alert('Please enter password');
  //     return;
  //   }



  // }
