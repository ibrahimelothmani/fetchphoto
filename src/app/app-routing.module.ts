import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdditionComponent } from './addition/addition.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'addition', component: AdditionComponent},
  {path: 'list', component: ListComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
