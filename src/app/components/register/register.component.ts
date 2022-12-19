import {Component, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {UserCredentials} from "../../shared/data-type/UserCredentials";
import {ConfirmedValidator} from "./confirmedValidator";
import {Router} from "@angular/router";
import {LoginUserCredentials} from "../../shared/data-type/LoginUserCredentials";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  _registerFormGroup = this.formBuilder.group({
    email: ["", [Validators.required,
      Validators.pattern("^[a-z]+\\.[a-z]+@(stud.){0,1}(ubbcluj.ro){1}$")]],
    password: ["", [Validators.required,
      Validators.pattern("^(?=.*?[A-Z])[a-z]*(?=.*?[0-9])[#?!@$%^&*-]*.{5,}$")]],
    confirmPassword: ["", [Validators.required,
      Validators.pattern("^(?=.*?[A-Z])[a-z]*(?=.*?[0-9])[#?!@$%^&*-]*.{5,}$")]]
    },
    {
    validator: ConfirmedValidator('password', 'confirmPassword')
  })

  get email() {
    return this._registerFormGroup.get('email')
  }
  get password() {
    return this._registerFormGroup.get('password')
  }
  get confirmPassword() {
    return this._registerFormGroup.get('confirmPassword')
  }

  constructor(private userService: UserService, private formBuilder: UntypedFormBuilder, private router : Router) {
  }

  get registerFormGroup(): UntypedFormGroup {
    return this._registerFormGroup;
  }

  ngOnInit(): void {
  }

  public registerUser() {
    const valuesFromForm = this._registerFormGroup.value;
    const userCredentials: UserCredentials = {
      email: valuesFromForm.email!,
      password: valuesFromForm.password!,
      confirmPassword: valuesFromForm.confirmPassword
    };


    //@ts-ignore
    this.userService.registerUser(userCredentials).subscribe({
      next: response => {

        this.router.navigate(['login'])
        localStorage.setItem('email', userCredentials.email);
      },
      error: err => {

      }
    });
  }

}
