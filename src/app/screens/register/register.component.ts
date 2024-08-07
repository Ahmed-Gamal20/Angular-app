import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
showError:boolean=false;
errorMessage:string="";
router=inject(Router);
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('[A-Za-z0-9]{3,8}')]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern('[A-Za-z0-9]{3,8}')]),
    phone:new FormControl(null,[Validators.required,Validators.minLength(11),Validators.maxLength(13)])
  });

  constructor(private _authService:AuthService){

  }

register(){
  if(this.registerForm.valid==false){
// this.showError=true;
this.registerForm.markAllAsTouched();
  }

else{
  this.errorMessage="";
this._authService.register(this.registerForm.value).subscribe({
  next:(res)=>{
    console.log(res);
    this.registerForm.reset();
    this.router.navigate(['/home']);
    
  },
  error:(err)=>{
    console.log(err);
    this.errorMessage=err.error.message();
    
  },
  complete:()=>{
console.log('done');

  }
})
}
}
}
