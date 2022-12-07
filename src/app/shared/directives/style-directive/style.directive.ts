import { Directive } from '@angular/core';
import { ClickEmitDirective } from '../click-directive/click-emit.directive';
import { ColorDirective } from '../color-directive/color.directive';
import { FontWeightDirective } from '../font-weight-directive/font-weight.directive';
import { MouseEffectsDirective } from '../mouse-directive/mouse-effects.directive';

@Directive({
  selector: '[appStyle]',
  standalone: true,
  hostDirectives: [
    { directive: ColorDirective, inputs: ['color'] },
    { directive: FontWeightDirective, inputs: ['weight'] },
    { directive: ClickEmitDirective, outputs: ['appEmit: emit'] }
  ]
})
export class StyleDirective {

  constructor() { }

}
