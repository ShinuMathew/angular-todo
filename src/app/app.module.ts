import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { ToDoItemsComponent } from './components/to-do-items/to-do-items.component';


@NgModule({
  // Components
  declarations: [
    AppComponent,
    ToDosComponent,
    ToDoItemsComponent
  ],
  // Modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // Services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
