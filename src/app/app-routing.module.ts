import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'medicines', component: MedicinesComponent },
  { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
