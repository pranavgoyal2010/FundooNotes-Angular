import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;  
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]      
    });
  }

  get f() { return this.registerForm.controls; }

  onRegisterSubmit(): void {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      // display form values on success
      console.log('Registration done!');
      console.log(this.registerForm.value);      
  }
  
}
