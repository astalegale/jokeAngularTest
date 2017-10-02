import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../models/joke';

@Component({
    selector: 'app-joke-form',
    templateUrl: './joke-form.component.html',
    styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

    @Output() jokeCreated = new EventEmitter<Joke>();

    constructor() { }

    ngOnInit() {
    }

    createJoke(setup: string, punchline: string) {
        const j = new Joke(setup, punchline);
        this.jokeCreated.emit(j);
    }
}
