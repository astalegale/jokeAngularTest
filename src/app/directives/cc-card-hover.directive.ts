import { Directive, ElementRef, HostListener, Renderer, HostBinding, Input } from '@angular/core';


@Directive({
    selector: '[appCcCardHover]'
})
export class CcCardHoverDirective {

    @HostBinding('class.border-primary') private isHovering = false;

    // tslint:disable-next-line:no-input-rename
    @Input('appCcCardHover') config = {
        querySelector: '.card-text'
    };

    constructor(private renderer: Renderer, private el: ElementRef) {
        // el.nativeElement.style.backgroundColor = 'gray';
    }

    @HostListener('mouseover') onMouseOver() {
        const punchlineEl = this.el.nativeElement.querySelector(this.config.querySelector);
        this.renderer.setElementStyle(punchlineEl, 'display', 'block');
        this.isHovering = true;
    }

    @HostListener('mouseout') onMouseOut() {
        const punchlineEl = this.el.nativeElement.querySelector(this.config.querySelector);
        this.renderer.setElementStyle(punchlineEl, 'display', 'none');
        this.isHovering = false;
    }
}
