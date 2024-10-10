import { Injectable } from '@angular/core';
import { ProjectInterface } from './project';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectlist:ProjectInterface[]=
  [
    // {
    //   name:"Sharkie",
    //   url:"https://rabia-soeylemez.developerakademie.net/Sharkie/index.html",
    //   img:"assets/img/Sharkie.png",
    //   date:"09/24",
    //   info:"Sharkie is a Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.",
    //   usedLanguages:["HTML","CSS", "JavaScript"],
    // },
    // {
    //   name:"Join",
    //   url:"https://bd-0524-join-1.developerakademie.net/join-group-wark/html/index.html",
    //   img:"assets/img/Join.png",
    //   date:"",
    //   info:"Join is a task manager, which is inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    //   usedLanguages:["HTML", "CSS", "JavaScript"],
    // },
    // {
    //   name:"Pokedex",
    //   url:"https://rabia-soeylemez.developerakademie.net/pokemon/index.html",
    //   img:"assets/img/Pokedex.png",
    //   date:"07/24",
    //   info:"a Pokedex is a simple library that provides and catalogues pokemon information, based on the PokeAPI.",
    //   usedLanguages:["HTML", "CSS", "JavaScript"],
    // },
  ];

  constructor(private translate: TranslateService) {
    this.loadAccounts(); // Initiales Laden der Accounts

    // Wenn die Sprache gewechselt wird, die Accounts erneut laden
    this.translate.onLangChange.subscribe(() => {
      this.loadAccounts();
    });
  }

  loadAccounts(): void {
    this.translate.get('projectExamples.projectlist').subscribe((data: any[]) => {
      this.projectlist = data; // Laden der Accounts aus der Übersetzungsdatei
    });
  }
}
