import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'contact',
  imports: [PanelModule, ButtonModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {}
