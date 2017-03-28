import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    console.log(this.registrationForm);
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phone: new FormControl(),
      repeatedPassword: new FormControl(),
      privacyTerms: new FormControl()
    });
  }

}
