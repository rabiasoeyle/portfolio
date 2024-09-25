import { Component } from '@angular/core';
import { ExampleComponent } from './example/example.component';
import { Project } from '../../project';

@Component({
  selector: 'app-project-examples',
  standalone: true,
  imports: [ExampleComponent],
  templateUrl: './project-examples.component.html',
  styleUrl: './project-examples.component.scss'
})
export class ProjectExamplesComponent {
projects: Project[];
constructor(){
  this.projects = this.projectsArray();
}
projectsArray(): Project[]{
return [
  {
    name:"Sharkie",
    url:"https://rabia-soeylemez.developerakademie.net/Sharkie/index.html",
    img:"assets/img/Sharkie",
    date:"",
    info:"",
    usedLanguages:[],
  },
  {
    name:"Join",
    url:"https://bd-0524-join-1.developerakademie.net/join-group-wark/html/index.html",
    img:"assets/img/Join",
    date:"",
    info:"",
    usedLanguages:[],
  },
  {
    name:"Pokedex",
    url:"https://rabia-soeylemez.developerakademie.net/pokemon/index.html",
    img:"assets/img/Pokedex",
    date:"",
    info:"",
    usedLanguages:[],
  },


]
}
}
