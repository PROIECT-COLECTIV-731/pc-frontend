import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  emailFromRegister : string = ""
  private _loginFormGroup = this.formBuilder.group({
    email: ["", [Validators.required,
      Validators.pattern("^[a-z]+\\.[a-z]+@(stud.){0,1}(ubbcluj.ro){1}$")]],
    password: ["", [Validators.required,
      //at least one upper case English letter, one lower case English letter, one digit, and one special character ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$
      Validators.pattern("^(?=.*?[A-Z])[a-z]*(?=.*?[0-9])[#?!@$%^&*-]*.{5,}$")]],
  })

  constructor(private userService: UserService, private formBuilder: UntypedFormBuilder, private router : Router) {
  }


  ngOnInit(): void {

    if (localStorage.getItem('email') != null) {
    this.emailFromRegister = localStorage.getItem('email')!;
    this._loginFormGroup.patchValue({email:this.emailFromRegister})
    }
    localStorage.removeItem('email');
    console.log(this.emailFromRegister)

  }

  get email() {
    return this._loginFormGroup.get('email')
  }
  get password() {
    return this._loginFormGroup.get('password')
  }

  get loginFormGroup(): UntypedFormGroup {
    return this._loginFormGroup;
  }

  public loginUser() {
    const valuesFromForm = this._loginFormGroup.value;
    const userCredentials: { email: any, password: any; } = {
          email: valuesFromForm.email!,
          password: valuesFromForm.password!,
    };


   

    // @ts-ignore
      this.userService.loginUser(userCredentials).subscribe({
        next: response => {
          this.router.navigate(['menu'])
          localStorage.setItem('email', userCredentials.email)
        },
        error: err => {
        }
      });
  }

  public forgotPassword() {
    const valuesFromForm = this.loginFormGroup.value;
    console.log(this.loginFormGroup.value);
    const userCredentials: { password: any; email: any } = {
      email: valuesFromForm.email!,
      password: valuesFromForm.password!
    };
    // @ts-ignore
    this.userService.forgotPassword(userCredentials.email).subscribe({
      next: response => {


      },
      error: err => {
        //TODO: create dialog boxes with email not valid for

      }
    });
  }

  public goToRegister(){
    this.router.navigate(['register'])
  }


}
