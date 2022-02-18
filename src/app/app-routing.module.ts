import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { ClaimcountComponent } from './claimcount/claimcount.component';
import { MappingComponent } from './mapping/mapping.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Route[] = [

  {path:'claimcount', component: ClaimcountComponent },
  {path:'mapping', component: MappingComponent },
  {path:'alert', component: AlertComponent },
  {path:'**' , component:  PageNotFoundComponent},
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
