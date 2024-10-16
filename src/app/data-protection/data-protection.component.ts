import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-data-protection',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './data-protection.component.html',
  styleUrl: './data-protection.component.scss'
})
export class DataProtectionComponent implements AfterViewInit {
  @ViewChild('top') topElement!: ElementRef;
  constructor(private router: Router) {}
  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }
  
  scrollToTop() {
    if (this.topElement) {
      this.topElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
}
}
