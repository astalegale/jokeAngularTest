import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../models/joke';

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

    @Input('joke') joke: Joke;

    @Output() jokeDeleted = new EventEmitter<Joke>();

    ngOnInit() {
    }

    deleteJoke() {
        this.jokeDeleted.emit(this.joke);
    }
}
