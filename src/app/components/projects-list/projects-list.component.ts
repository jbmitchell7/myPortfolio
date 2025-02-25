import { Component } from '@angular/core';
import { projects } from '../../data/projects';

@Component({
  selector: 'projects-list',
  imports: [],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {
  projects = projects;
}
