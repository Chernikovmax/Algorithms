import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BinarySearchComponent} from "./search/components/binary-search/binary-search.component";
import {LinkedListComponent} from "./structures/linked-list/linked-list.component";
import {DoublyLinkedListComponent} from "./structures/doubly-linked-list/doubly-linked-list.component";

const routes: Routes = [
  { path: 'binary-search', component: BinarySearchComponent },
  { path: 'linked-list', component: LinkedListComponent },
  { path: 'doubly-linked-list', component: DoublyLinkedListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
