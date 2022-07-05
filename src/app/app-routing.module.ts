import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MedicinesComponent } from './medicines/medicines.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'medicines', component: MedicinesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
