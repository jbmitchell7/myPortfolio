import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper.component';

@Component({
  selector: 'contact',
  imports: [SectionWrapperComponent, ButtonModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {}
