import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor() {

  }

  onSubmit($event) {
    console.log(this.registrationForm.valid, this.registrationForm.value);
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl("", Validators.required),
      lastname: new FormControl("", Validators.minLength(3)),
      email: new FormControl("", Validators.email),
      password: new FormControl(""),
      phone: new FormControl(""),
      repeatedPassword: new FormControl(""),
      privacyTerms: new FormControl(false,[Validators.requiredTrue])
    });
  }

}
 