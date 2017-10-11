import { Directive, ElementRef, HostListener, Renderer, HostBinding} from '@angular/core';


@Directive({
    selector: '[appCcCardHover]'
})
export class CcCardHoverDirective {

@HostBinding('class.card-outline-primary') private isHovering  = false;


    constructor(private el: ElementRef, private renderer: Renderer) {
        // el.nativeElement.style.backgroundColor = 'gray';
    }

@HostListener('mouseover') onMouseOver() {
     const punchlineEl = this.el.nativeElement.querySelector('.card-text');
     this.renderer.setElementStyle(punchlineEl, 'display', 'block');
this.isHovering = true;
}

@HostListener('mouseout') onMouseOut() {
     const punchlineEl = this.el.nativeElement.querySelector('.card-text');
     this.renderer.setElementStyle(punchlineEl, 'display', 'none');
this.isHovering = false;
}
}
