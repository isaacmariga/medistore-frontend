import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-single-medicine',
  templateUrl: './single-medicine.component.html',
  styleUrls: ['./single-medicine.component.css'],
})
export class SingleMedicineComponent implements OnInit {
  medicine: Medicines;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getMedicines();
  }

  getMedicines() {
    this.httpClient
      .get<any>(
        'https://medistore-apis.herokuapp.com/api/medicine-id/' +
          this.medicine.id
      )
      .subscribe((response) => {
        console.log(this.medicine.id);
        this.medicine = response;
      });
  }
}
