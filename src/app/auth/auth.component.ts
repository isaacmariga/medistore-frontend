import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { signupModel, AuthResData, loginModel, User } from './auth.model';
import { BehaviorSubject, throwError } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  signupForm: FormGroup;
  loginForm: FormGroup;
  token: string;
  error: string = null;
  success: string = null;
  user = new BehaviorSubject<User>(null);

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwords: new FormGroup(
        {
          password: new FormControl(null, [
            Validators.required,
            Validators.minLength(8),
          ]),
          confirmpassword: new FormControl(null, Validators.required),
        },
        this.passwordCheck
      ),
    });
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSignup() {
    console.log(this.signupForm);
    this.authService
      .signup({
        email: this.signupForm.get('email').value,
        name: this.signupForm.get('name').value,
        password: this.signupForm.get('passwords.password').value,
      })
      .subscribe(
        (data: AuthResData) => {
          this.isLoginMode = true;
          this.success = 'Signup was successfull';
          this.error = null;
        },
        (errorRes) => {
          this.error = errorRes;
        }
      );
  }
  onLogin() {
    this.authService.login(this.loginForm.value).subscribe(
      (data: AuthResData) => {
        this.token = data.token;
        console.log(data);
        this.router.navigate(['/']);
      },
      (errorRes) => {
        this.error = errorRes;
      }
    );
    this.loginForm.reset();
  }

  passwordCheck(control: FormGroup): { [s: string]: boolean } {
    if (control.get('password').value != control.get('confirmpassword').value) {
      return { notsame: true };
    }
    return null;
  }
}
