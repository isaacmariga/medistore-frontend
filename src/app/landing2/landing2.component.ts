import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
export class Diseases {
  constructor(public name: string, public id: number, public picture: string) {}
}
@Component({
  selector: 'app-landing2',
  templateUrl: './landing2.component.html',
  styleUrls: ['./landing2.component.css'],
})
export class Landing2Component implements OnInit {
  diseases: Diseases[];
  constructor(private httpClient: HttpClient) {}
  cloud: string = 'https://res.cloudinary.com/dtj7bnapz/';
  searchText = '';
  data: any;
  name = '';

  myForm = new FormGroup({
    name: new FormControl(''),
  });

  ngOnInit(): void {
    this.getDiseases();
    this.getMedicines();
  }

  getDiseases() {
    this.httpClient
      .get<any>('https://medistore-apis.herokuapp.com/api/disease/')
      .subscribe((response) => {
        this.diseases = response;
        // console.log(response);
      });
  }
  getMedicines() {
    this.httpClient
      .get('https://medistore-apis.herokuapp.com/api/medicines/')
      .subscribe((data) => {
        console.log(data);
        this.data = data;
      });
  }
}
