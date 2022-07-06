import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationComponent } from './donation/donation.component';
import { LandingComponent } from './landing/landing.component';
import { DonateFormComponent } from './donate-form/donate-form.component';

const routes: Routes = [
  { path: 'donation', component: DonationComponent },
  { path: 'landing',  component:  LandingComponent },
  { path: 'donate-form', component: DonateFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
