import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeFormComponent } from './joke/joke-form/joke-form.component';
import { JokeComponent } from './joke/joke/joke.component';
import { JokeListComponent } from './joke/joke-list/joke-list.component';
import { CcCardHoverDirective } from './directives/cc-card-hover.directive';

@NgModule({
    declarations: [
        AppComponent,
        JokeFormComponent,
        JokeComponent,
        JokeListComponent,
        CcCardHoverDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
