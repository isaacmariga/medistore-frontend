import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Diseases {
  constructor(public name: string, public id: number, public picture: string) {}
}
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  diseases: Diseases[];
  constructor(private httpClient: HttpClient) {}
  cloud: string = 'https://res.cloudinary.com/dtj7bnapz/';

  ngOnInit(): void {
    this.getDiseases();
  }

  getDiseases() {
    this.httpClient
      .get<any>('https://medistore-apis.herokuapp.com/api/disease/')
      .subscribe((response) => {
        this.diseases = response;
        // console.log(response);
      });
  }
}
