import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { ReferencesComponent } from './references/references.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AtfComponent } from './atf/atf.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [SkillsComponent, ReferencesComponent, ProjectsComponent, ContactComponent, AboutComponent, AtfComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
