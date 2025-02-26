import { Component } from '@angular/core';
import { skills } from '../../data/skills';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SectionDirective } from '../../directives/section.directive';

@Component({
  selector: 'about',
  imports: [CardModule, ButtonModule, SectionDirective],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  jobSkills = skills;
}
