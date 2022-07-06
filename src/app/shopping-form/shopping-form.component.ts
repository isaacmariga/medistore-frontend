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
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css'],
})
export class ShoppingFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      medicine: new FormControl('', Validators.required),
      units: new FormControl('', Validators.required),
      buyer: new FormControl('', Validators.required),
      disease: new FormControl(),
    });
  }
  url = 'https://medistore-apis.herokuapp.com/api/purchase/';

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
