export class Joke {
    public hide: boolean;

    constructor(public setup: string, punchline: string) { }

    toggle() {
        this.hide = !this.hide;
    }
}
