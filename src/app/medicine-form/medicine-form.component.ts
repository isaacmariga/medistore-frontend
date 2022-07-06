import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medicine-form',
  templateUrl: './medicine-form.component.html',
  styleUrls: ['./medicine-form.component.css'],
})
export class MedicineFormComponent implements OnInit {
  langs: string[] = ['Leukimia', 'Teams', 'Wendover'];

  myForm: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      disease: new FormControl(),
    });
  }
  url = 'https://medistore-apis.herokuapp.com/api/medicines/';

  getText(data: any) {
    if (this.myForm.valid) {
      this.myForm.reset();
    }
    this.http
      .post(this.url, data)
      .toPromise()
      .then((data) => {});
  }
}
