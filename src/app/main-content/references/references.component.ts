import { AfterViewInit, Component, inject, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ReferencesInterface } from '../../references';
import { ReferencesService } from '../../references.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements AfterViewInit{
  @ViewChildren('reference', { read: ElementRef }) examples!: QueryList<ElementRef>;
  
  ngAfterViewInit() {
    this.examples.forEach((example, index) => {
      if(index == 0){
        const elementRight = example.nativeElement;
        const options = {
          root: null,
          rootMargin: '100px',
          threshold: 0.3,
        };
          const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
                  elementRight.classList.add('showLeft');
                  observer.unobserve(elementRight)
            } 
          });
        }, options);
        observer.observe(elementRight);
      }else{}
      if (index == 2){
        const element = example.nativeElement;
        const options = {
        root: null,
        rootMargin: '100px',
        threshold: 0.3,
        };
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
                element.classList.add('show');
                observer.unobserve(element)
          } 
        });
    }, options);
    observer.observe(element);
  }else{
  }
});
  }
referenceList = inject(ReferencesService);
}
