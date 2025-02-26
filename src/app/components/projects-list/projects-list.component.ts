import { Component } from '@angular/core';
import { projects } from '../../data/projects';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SectionDirective } from '../../directives/section.directive';

@Component({
  selector: 'projects-list',
  imports: [ButtonModule, CardModule, SectionDirective],
  templateUrl: './projects-list.component.html'
})
export class ProjectsListComponent {
  projects = projects;
}
