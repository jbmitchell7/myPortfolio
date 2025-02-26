import { Component } from '@angular/core';
import { skills } from '../../data/skills';
import { ButtonModule } from 'primeng/button';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper.component';

@Component({
  selector: 'about',
  imports: [ButtonModule, SectionWrapperComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  jobSkills = skills;
}
