import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  empForm: FormGroup;

  educations: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ];

  constructor(private _fb: FormBuilder) { 
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      bob: '',
      gender: '',
      education: '',
      company: '',
      experiance: '',
      package: ''
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit() {
    if(this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }

}
