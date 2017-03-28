import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validateEmail } from "../../validators/email.validator"
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

  }

  onSubmit($event) {
    console.log(this.registrationForm.valid, this.registrationForm.value);
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      email: ["", [Validators.required, validateEmail]],
      phone: ["", [Validators.required]],
      privacyTerms: [false, [Validators.requiredTrue]],
      passwords: this.fb.group({
        password: ["", [Validators.required]],
        repeatedPassword: ["", [Validators.required]]
      })
    });
    /*this.registrationForm = new FormGroup({
      name: new FormControl("", Validators.required),
      lastname: new FormControl("", Validators.minLength(3)),
      email: new FormControl("", Validators.email),
      password: new FormControl(""),
      phone: new FormControl(""),
      repeatedPassword: new FormControl(""),
      privacyTerms: new FormControl(false,[Validators.requiredTrue])
    });*/
  }



  validatePasswords(input: FormControl) {
    if (input.value === this.registrationForm.value.passwords.password) {
      return null;
    } else {
      return { valid: true }
    }
  }

}
