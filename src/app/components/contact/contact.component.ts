import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SectionDirective } from '../../directives/section.directive';

@Component({
  selector: 'contact',
  imports: [PanelModule, ButtonModule, SectionDirective],
  templateUrl: './contact.component.html'
})
export class ContactComponent {}
