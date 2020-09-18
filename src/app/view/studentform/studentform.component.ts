import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { phoneNumberValidator } from 'src/app/shared/phonenumber-validator.directive';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss']
})
export class StudentformComponent implements OnInit {

  coruses = ["Maths", "Physics", "Chemistry"]

  constructor(private fb: FormBuilder) { }


  studentForm = this.fb.group({
    name: ['sdf', Validators.required],
    gender: ['F'],
    course: [''],
    address: this.fb.group({
      street: [''],
      city: ['']
    }),
    phoneNumbers: this.fb.array([this.getPhoneNumberGrp("32", true)], phoneNumberValidator())
  })

  ngOnInit() {
    this.studentForm.patchValue({
      course: this.coruses[1]
    })
  }

  onFormClick(){    

  }

  get phoneNumberArray(): FormArray {
    return this.studentForm.get('phoneNumbers') as FormArray;
  }

  addPhone() {
    this.phoneNumberArray.push(this.getPhoneNumberGrp("", false))
  }

  getPhoneNumberGrp(phone: string, isPrimary: boolean): FormGroup {
      return this.fb.group({
        phone: phone,
        isPrimary: isPrimary
      })
  }

  onPrimaryPhoneChange(e, i) {
      this.phoneNumberArray.controls.forEach((formGrp, index) => {
        if(i != index) {
          formGrp.patchValue({"isPrimary": false})
        }
      });
  }

  removePhone(index) {
    this.phoneNumberArray.controls.forEach((formGrp, i) => {
      if (i == index) {
        this.phoneNumberArray.removeAt(i);
      }
    });
  }
}