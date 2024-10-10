import { NgIf } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  translate = inject(TranslationService);
  menuIsOpen:boolean = false;
  constructor(){

  }
  toggleMenu(){
    this.menuIsOpen =!this.menuIsOpen;
  }
  
  //This is a eventlistener for the situation, that the toggle-content is open and the user clicks 
  //somewhere else then the toggle button or content.
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const toggleMenuButton = document.getElementById('toggleMenu');
    const toggleContent = document.getElementById('toggleContent');
    if (
      this.menuIsOpen && 
      toggleMenuButton && !toggleMenuButton.contains(event.target as Node) && 
      toggleContent && !toggleContent.contains(event.target as Node)
    ) {
      this.menuIsOpen = false;
    }
  }

}
