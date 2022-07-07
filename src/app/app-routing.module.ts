import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { MainComponent } from './main/main.component';
import { SingleMedicineComponent } from './single-medicine/single-medicine.component';
import { MedicineFormComponent } from './medicine-form/medicine-form.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'medicines', component: MedicinesComponent },
  { path: 'main', component: MainComponent },
  { path: 'single/:id', component: SingleMedicineComponent },
  { path: 'medicine-form', component: MedicineFormComponent },
  { path: 'shopping-form/medicine/:id', component: ShoppingFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
