import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinarySearchComponent } from './components/binary-search/binary-search.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BinarySearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SearchModule { }
