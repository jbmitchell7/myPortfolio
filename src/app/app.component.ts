import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [
    MenubarModule,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsListComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      url: '#home',
      target: '_self'
    },
    {
      label: 'About',
      url: '#about',
      target: '_self'
    },
    {
      label: 'Experience',
      url: '#experience',
      target: '_self'
    },
    {
      label: 'Projects',
      url: '#projects',
      target: '_self'
    },
    {
      label: 'Contact',
      url: '#contact',
      target: '_self'
    }
  ];
}
