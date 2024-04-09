import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;  
  
  constructor(private userService:UserService, private formBuilder: FormBuilder, private  router: Router) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]      
    });
  }

  get f() { return this.registerForm.controls; }

  handleRegister(): void {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      const {firstName, lastName, email, password}= this.registerForm.value;

      this.userService.registerApi({
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password
      }).subscribe( results =>{console.log(results)},error=>{console.log(error)});

      // display form values on success
      console.log('Registration done!');
      console.log(this.registerForm.value);   
      this.handleSignIn();   
  }
  
  handleSignIn(){
    this.router.navigate(['']);
  }
}
