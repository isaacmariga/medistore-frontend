import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit {
  myForm: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
    });
  }

  url = 'https://medistore-apis.herokuapp.com/api/donation';
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
