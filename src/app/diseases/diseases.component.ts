import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Diseases {
  constructor(public name: string) {}
}

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css'],
})
export class DiseasesComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  diseases: Diseases[];

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
