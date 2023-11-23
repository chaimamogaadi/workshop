import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { AppartmentsComponent } from './appartments/appartments.component';

const routes: Routes = [
  {path:'residences', component:ResidencesComponent},
  {path:'formresidences', component:FormResidenceComponent},
  {path:'detailsappartment/:param', component:AppartmentsComponent},
  {path:'addAppartment/:id', component:FormResidenceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
