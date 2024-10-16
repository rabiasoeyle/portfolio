import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AtfComponent } from './atf/atf.component';
import { ProjectExamplesComponent } from "./project-examples/project-examples.component";
import { TranslateModule } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ SkillsComponent, ReferencesComponent, ProjectExamplesComponent, ContactComponent, AboutComponent, AtfComponent, ProjectExamplesComponent, TranslateModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent{

}
