import { Component, inject } from '@angular/core';
import { ReferencesInterface } from '../../references';
import { ReferencesService } from '../../references.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
referenceList = inject(ReferencesService);
}
