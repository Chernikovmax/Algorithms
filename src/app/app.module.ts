import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchModule} from "./search/search.module";
import { LinkedListComponent } from './structures/linked-list/linked-list.component';
import { DoublyLinkedListComponent } from './structures/doubly-linked-list/doubly-linked-list.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { StackQueueComponent } from './structures/stack-queue/stack-queue.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        LinkedListComponent,
        DoublyLinkedListComponent,
        HeaderComponent,
        BodyComponent,
        StackQueueComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SearchModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}
