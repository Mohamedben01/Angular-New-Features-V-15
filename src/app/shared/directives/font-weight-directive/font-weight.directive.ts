import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontWeight]',
  standalone: true
})
export class FontWeightDirective implements OnChanges {
  @Input() weight: string = '';
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weight']) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', this.weight);
    }
  }
}
