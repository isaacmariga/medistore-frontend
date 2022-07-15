import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { MainComponent } from './main/main.component';
import { SingleMedicineComponent } from './single-medicine/single-medicine.component';
import { MedicineFormComponent } from './medicine-form/medicine-form.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { DonateFormComponent } from './donate-form/donate-form.component';
import { DonationComponent } from './donation/donation.component';
import { UnitFormComponent } from './unit-form/unit-form.component';
import { DonatingThanksComponent } from './donating-thanks/donating-thanks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Landing2Component } from './landing2/landing2.component';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // { path: '', component: LandingComponent },
  { path: '', component: Landing2Component },
  {
    path: 'medicines',
    component: MedicinesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'main', component: MainComponent },
  { path: 'single/:id', component: SingleMedicineComponent },
  { path: 'medicine-form', component: MedicineFormComponent },
  { path: 'shopping-form/medicine/:id', component: ShoppingFormComponent },
  { path: 'unit-form/medicine/:id', component: UnitFormComponent },
  { path: 'donate', component: DonateFormComponent },
  { path: 'donation-form/:id', component: DonationComponent },
  { path: 'donation-thanks', component: DonatingThanksComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'profile', component: AccountComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
