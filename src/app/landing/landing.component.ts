import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
// Display the list of medicines and their details

export class LandingComponent implements OnInit {


  
  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
  }

}
