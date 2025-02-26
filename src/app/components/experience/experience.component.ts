import { Component } from '@angular/core';
import { education, work } from '../../data/experience';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'experience',
  imports: [CardModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  education = education;
  work = work;
}
