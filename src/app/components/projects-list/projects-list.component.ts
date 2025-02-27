import { Component } from '@angular/core';
import { projects } from '../../data/projects';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { SectionWrapperComponent } from '../section-wrapper/section-wrapper.component';

@Component({
  selector: 'projects-list',
  imports: [ButtonModule, AccordionModule, SectionWrapperComponent],
  templateUrl: './projects-list.component.html'
})
export class ProjectsListComponent {
  projects = projects;
  startValue = projects.map(p => p.title);
}
