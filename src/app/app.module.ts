import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleMedicineComponent } from './single-medicine/single-medicine.component';
import { MedicineFormComponent } from './medicine-form/medicine-form.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MedicinesComponent,
    NavbarComponent,
    MainComponent,
    SingleMedicineComponent,
    MedicineFormComponent,
    ShoppingFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
