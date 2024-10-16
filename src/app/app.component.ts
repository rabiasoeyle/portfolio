import { AfterViewInit, Component,OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ViewportScroller } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
// import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, MainContentComponent,ImprintComponent, DataProtectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'portfolio';
  @ViewChild('topOfPage') topElement!: ElementRef;
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          // Scrollen zu dem Element mit der ID (fragment)
          this.viewportScroller.scrollToAnchor(fragment);
        } else {
          // Standard-Scrollverhalten (du könntest auch hier steuern, wo es hin scrollt)
          this.viewportScroller.scrollToPosition([0, 0]); // oder an eine bestimmte Position
        }
      }
    });
  }
  
  scrollToTop() {
    if (this.topElement) {
      this.topElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
}
}
