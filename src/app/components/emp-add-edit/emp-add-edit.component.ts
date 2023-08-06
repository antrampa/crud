import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

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

  constructor(private _fb: FormBuilder, 
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>) { 
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
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee added successfully!');
          this._dialogRef.close(true);
        },
        error: console.log
      });
    }
  }

}
