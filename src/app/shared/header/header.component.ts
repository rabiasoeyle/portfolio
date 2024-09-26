import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuIsOpen:boolean = false;
  constructor(){

  }
  toggleMenu(){
    this.menuIsOpen =!this.menuIsOpen;
    console.log(this.menuIsOpen)
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
