import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BinarySearchComponent} from "./search/components/binary-search/binary-search.component";

const routes: Routes = [
  { path: 'binary-search', component: BinarySearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
