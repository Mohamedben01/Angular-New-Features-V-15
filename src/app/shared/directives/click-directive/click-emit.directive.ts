import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickEmit]',
  standalone: true
})
export class ClickEmitDirective {
  @Output() appEmit = new EventEmitter();
  @HostListener('click')
  onClick() {
    this.appEmit.emit();
  }

}
