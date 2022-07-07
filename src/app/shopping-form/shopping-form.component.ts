import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export class Medicines {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string,
    public picture: string
  ) {}
}
@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css'],
})
export class ShoppingFormComponent implements OnInit {
  myForm: FormGroup;
  medicines: Medicines;

  id = '';
  currentRoute: string;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMedicines();
    this.id = this.route.snapshot.params.id;

    this.myForm = new FormGroup({
      medicine: new FormControl(this.id),
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
    this.httpClient
      .post(this.url, data)
      .toPromise()
      .then((data) => {});
  }
  getMedicines() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.httpClient
      .get<any>(
        'https://medistore-apis.herokuapp.com/api/medicine-id/' + this.id
      )
      .subscribe((response) => {
        this.medicines = response;
      });
  }
}
