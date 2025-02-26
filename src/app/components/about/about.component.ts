import { Component } from '@angular/core';
import { skills } from '../../data/skills';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'about',
  imports: [CardModule, ButtonModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  jobSkills = skills;
}
