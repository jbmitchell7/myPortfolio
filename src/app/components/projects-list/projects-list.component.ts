import { Component } from '@angular/core';
import { projects } from '../../data/projects';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'projects-list',
  imports: [ButtonModule, CardModule],
  templateUrl: './projects-list.component.html'
})
export class ProjectsListComponent {
  projects = projects;
}
