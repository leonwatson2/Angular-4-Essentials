import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogListComponent } from './dog-list/dog-list.component'
@NgModule({
  declarations: [
    AppComponent,
    DogDetailsComponent,
    DogListComponent //adds to app module automatically 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
