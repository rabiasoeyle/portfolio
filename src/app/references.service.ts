import { Injectable } from '@angular/core';
import { ReferencesInterface } from './references';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {
  references: ReferencesInterface[] =
    [
      {
        name:"Muaz Yildiz",
        reference:"Rabias Engagement für ihre Arbeit sowie ihre Fähigkeit, komplexe Probleme zu lösen, machen sie zu einer wertvollen Bereicherung für jedes Team. Ich bin überzeugt davon, dass sie in der Lage ist, jede Herausforderung im Bereich der Softwareentwicklung erfolgreich anzugehen und freue mich darauf, weiterhin mit ihr zusammenzuarbeiten.",
      },
      {
        name:"Maximilian Stigler",
        reference:"Rabia ist hoch motiviert und lernt dank ihrer schnellen Auffassungsgabe unglaublich schnell. Bei unserem gemeinsamen Projekt hat sie oft die Initiative übernommen und uns alle mit ihrem Engagement mitgezogen.",
      },
      {
        name:"Robert Böpple",
        reference:"Lorem",
      },
    ];

    constructor(private translate: TranslateService) {
      this.loadAccounts(); // Initiales Laden der Accounts
  
      // Wenn die Sprache gewechselt wird, die Accounts erneut laden
      this.translate.onLangChange.subscribe(() => {
        this.loadAccounts();
      });
    }
  
    loadAccounts(): void {
      this.translate.get('reference.references').subscribe((data: any[]) => {
        this.references = data; // Laden der Accounts aus der Übersetzungsdatei
      });
    }
}
