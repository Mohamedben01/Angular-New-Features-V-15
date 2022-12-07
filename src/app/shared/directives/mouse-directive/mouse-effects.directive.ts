import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMouseEffects]',
  standalone: true
})
export class MouseEffectsDirective implements OnInit {

  constructor(
    private _elementRef: ElementRef
  ) {
    _elementRef.nativeElement.style.backgroundColor = 'blue';
  }
  ngOnInit(): void {
    this._elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('24px')
    this._elementRef.nativeElement.innerText = 'Mouse Enter'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('12px')
    this._elementRef.nativeElement.innerText = 'Mouse Leave'
  }
  @HostListener('click')
  onMouseClick() {
    console.log('hello med')
  }

  private highlight(fontSize: string) {
    this._elementRef.nativeElement.style.fontSize = fontSize;
  }

}
