import { Injectable } from '@angular/core';
import { ProjectInterface } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectlist:ProjectInterface[]=
  [
    {
      name:"Sharkie",
      url:"https://rabia-soeylemez.developerakademie.net/Sharkie/index.html",
      img:"assets/img/Sharkie.png",
      date:"",
      info:"",
      usedLanguages:["HTML","CSS", "JavaScript"],
    },
    {
      name:"Join",
      url:"https://bd-0524-join-1.developerakademie.net/join-group-wark/html/index.html",
      img:"assets/img/Join.png",
      date:"",
      info:"",
      usedLanguages:["HTML", "CSS", "JavaScript"],
    },
    {
      name:"Pokedex",
      url:"https://rabia-soeylemez.developerakademie.net/pokemon/index.html",
      img:"assets/img/Pokedex.png",
      date:"",
      info:"",
      usedLanguages:["HTML", "CSS", "JavaScript"],
    },
  
  
  ];

  constructor() {
     
}
}
