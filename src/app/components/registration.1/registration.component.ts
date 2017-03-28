import { Component, OnInit } from '@angular/core';


interface RegistrationForm {
  name: string
  lastname: string
  email: string
  password: string
  phone: string
  repeatedPassword: string,
  privacyTerms: boolean

}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  form: RegistrationForm = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    repeatedPassword: "",
    privacyTerms: false

  }

  constructor() { }

  ngOnInit() {
  }

}
