import { Injectable } from '@angular/core';
import { ProjectInterface } from './project';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectlist: ProjectInterface[]=[];

  constructor(private translate: TranslateService) {
    this.loadAccounts(); // Initiales Laden der Accounts
    // Wenn die Sprache gewechselt wird, die Accounts erneut laden
    this.translate.onLangChange.subscribe(() => {
      this.loadAccounts();
    });
    console.log(this.projectlist)
  }

  loadAccounts(): void {
    this.translate.get('projectExamples.projectlist').subscribe((data: any[]) => {
      this.projectlist = data; // Laden der Accounts aus der Übersetzungsdatei
    });
    
  }
}
