import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective implements OnChanges {
  @Input() color: string = '';
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.color);
    }
  }

}
