import { Component } from '@angular/core';
import { education, work } from '../../data/experience';

@Component({
  selector: 'experience',
  imports: [],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  education = education;
  work = work;
}
