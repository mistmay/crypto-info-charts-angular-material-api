import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './views/details-page/details-page.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { ListPageComponent } from './views/list-page/list-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'coin-list', pathMatch: 'full' },
  { path: 'coin-list', component: ListPageComponent },
  { path: 'coin-details/:id', component: DetailsPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
