import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeFormComponent } from './joke/joke-form/joke-form.component';
import { JokeComponent } from './joke/joke/joke.component';
import { JokeListComponent } from './joke/joke-list/joke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeFormComponent,
    JokeComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
