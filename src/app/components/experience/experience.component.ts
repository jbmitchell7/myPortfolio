import { Component } from '@angular/core';
import { education, work } from '../../data/experience';
import { CardModule } from 'primeng/card';
import { SectionDirective } from '../../directives/section.directive';

@Component({
  selector: 'experience',
  imports: [CardModule, SectionDirective],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  education = education;
  work = work;
}
