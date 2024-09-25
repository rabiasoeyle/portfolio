import { Component, inject } from '@angular/core';
import { ExampleComponent } from './example/example.component';
import { ProjectInterface } from '../../project';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-examples',
  standalone: true,
  imports: [ExampleComponent],
  templateUrl: './project-examples.component.html',
  styleUrl: './project-examples.component.scss'
})
export class ProjectExamplesComponent {
projects: ProjectInterface[];
projectlistdata= inject(ProjectService)
constructor(){
  this.projects = this.projectlistdata.projectlist;
  console.log(this.projects)
}

// projectsArray(): ProjectInterface[]{
// return [
//   {
//     name:"Sharkie",
//     url:"https://rabia-soeylemez.developerakademie.net/Sharkie/index.html",
//     img:"assets/img/Sharkie",
//     date:"",
//     info:"",
//     usedLanguages:["HTML","CSS", "JavaScript"],
//   },
//   {
//     name:"Join",
//     url:"https://bd-0524-join-1.developerakademie.net/join-group-wark/html/index.html",
//     img:"assets/img/Join",
//     date:"",
//     info:"",
//     usedLanguages:["HTML", "CSS", "JavaScript"],
//   },
//   {
//     name:"Pokedex",
//     url:"https://rabia-soeylemez.developerakademie.net/pokemon/index.html",
//     img:"assets/img/Pokedex",
//     date:"",
//     info:"",
//     usedLanguages:["HTML", "CSS", "JavaScript"],
//   },


// ]
}

