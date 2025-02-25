import { Component } from '@angular/core';
import { skills } from '../../data/skills';

@Component({
  selector: 'about',
  imports: [],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  jobSkills = skills;
}
