import { Component,ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit{
  @ViewChild('img') myImg!: ElementRef;
  @ViewChild('text') myText!: ElementRef;

  ngAfterViewInit() {
    let img = this.myImg.nativeElement;
    let text = this.myText.nativeElement
  
    const options = {
      root: null,
      //null um als Ansichtsquelle den gesamten Browser zu nutzen
      rootMargin: '100px',
      //dient zum vergrößern oder verkleinern des Hauptrahmens des Wurzelelements
      threshold: 0.2,
      //gibt an wie viel Prozent des elements bereits sichtbar sein müssen, damit die animation ausgeführt wird
      
    };

    const observer = new IntersectionObserver((entries) => {
      //Der an den Konstruktor übergebene Rückruf IntersectionObserver()erhält 
      //eine Liste von IntersectionObserverEntryObjekten und den Beobachter:
      entries.forEach(entry => {
        if (entry.isIntersecting && !text.classList.contains('showLeft')) {
          img.classList.add('show');
          text.classList.add('showLeft');
          //beobachtung stoppen, damit es nur einmal animiert
          observer.unobserve(img);
          observer.unobserve(text);
        } 
        // else {
        //   img.classList.remove('show');
        //   text.classList.remove('showLeft');
        // }
      });
    }, options);

    observer.observe(img);
    observer.observe(text);
  }
}
