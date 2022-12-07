import { NgFor } from '@angular/common';
import { Directive, DoCheck, EmbeddedViewRef, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngForEmpty]',
  standalone: true,
  hostDirectives: [
    {
      directive: NgFor,
      inputs: ['ngForOf:ngForEmptyOf']
    }
  ]
})
class NgForEmptyDirective<T> implements DoCheck {
  private vcr = inject(ViewContainerRef);
  @Input() ngForEmptyOf: T[] | undefined;
  @Input() ngForEmptyElse!: TemplateRef<any>;
  private ref?: EmbeddedViewRef<unknown>;

  ngDoCheck(): void {
    this.ref?.destroy();
    if (!this.ngForEmptyOf || this.ngForEmptyOf.length === 0) {
      this.ref = this.vcr.createEmbeddedView(this.ngForEmptyElse);
    }
  }
}
// we export our directive with a smaller and nicer name
export { NgForEmptyDirective as NgForEmpty };
