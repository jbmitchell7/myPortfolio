import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[section]'
})
export class SectionDirective {
  @HostBinding('class.min-h-[50vh]') minHeight = true;
  @HostBinding('class.pt-32') paddingTop = true;
}