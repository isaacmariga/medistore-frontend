import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Medicines {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public units: number,
    public description: string,
    public picture: string
  ) {}
}

export class Diseases {
  constructor(public name: string) {}
}

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css'],
})
export class MedicinesComponent implements OnInit {
  medicines: Medicines[];
  diseases: Diseases[];
  cloud: string = 'https://res.cloudinary.com/dtj7bnapz/';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getMedicines();
    this.getDiseases();
  }

  selectedDisease: string = 'Leukimia';
  @Output()
  selectedChanged: EventEmitter<string> = new EventEmitter<string>();
  onSelectedChanged() {
    // console.log(this.selectedDisease);
  }
  // selectedMedicine: string = 'Leukimia';
  // @Output()
  // selectedChanged: EventEmitter<string> = new EventEmitter<string>();
  // onSelectedChanged() {
  //   // console.log(this.selectedDisease);
  // }

  getMedicines() {
    this.selectedChanged.emit(this.selectedDisease);

    this.httpClient
      .get<any>(
        'https://medistore-apis.herokuapp.com/api/medicine/' +
          this.selectedDisease
      )
      .subscribe((response) => {
        this.medicines = response;
      });
  }
  getDiseases() {
    this.httpClient
      .get<any>('https://medistore-apis.herokuapp.com/api/disease/')
      .subscribe((response) => {
        this.diseases = response;
        // console.log(response);
      });
  }
  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
