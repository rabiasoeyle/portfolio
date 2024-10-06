import { Injectable } from '@angular/core';
import { ReferencesInterface } from './references';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {
  references: ReferencesInterface[] =
    [
    {
      name:"Ingo Kasper",
      reference:"Lorem",
    },
    {
      name:"Maximilian Stigler",
      reference:"Lorem",
    },
    {
      name:"Robert Böpple",
      reference:"Lorem",
    },
  ];

  constructor() { }
}
