import { NgIf } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  translate = inject(TranslationService);
  menuIsOpen:boolean = false;
  langMenuIsOpen:boolean = false;
  constructor(){

  }
  toggleMenu(){
    this.menuIsOpen =!this.menuIsOpen;
  }
  openLanguages(){
    this.langMenuIsOpen =!this.langMenuIsOpen;
  }
  
  //This is a eventlistener for the situation, that the toggle-content is open and the user clicks 
  //somewhere else then the toggle button or content.
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const toggleMenuButton = document.getElementById('toggleMenu');
    const toggleContent = document.getElementById('toggleContent');
    const langToggleButton = document.getElementById('langToggleButton');
    const langToggleContent = document.getElementById('langToggleContent');
    const langToggleContentDe = document.getElementById('langToggleContent-de');
    if (
      this.menuIsOpen && 
      toggleMenuButton && !toggleMenuButton.contains(event.target as Node) 
    ) {
      this.menuIsOpen = false;
    }
    if(
      this.langMenuIsOpen && langToggleButton && 
      !langToggleButton.contains(event.target as Node)
    ){
      this.langMenuIsOpen = false;
    }
  }

}
