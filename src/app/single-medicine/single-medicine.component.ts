import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  name = '';
  id = '';
  currentRoute: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMedicines();
  }

  getMedicines() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.httpClient
      .get<any>(
        'https://medistore-apis.herokuapp.com/api/medicine-id/' + this.id
      )
      .subscribe((response) => {
        this.medicine = response;
      });
  }
}
