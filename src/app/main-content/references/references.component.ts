import { AfterViewInit, Component, inject, ViewChildren, ElementRef, QueryList, AfterContentInit } from '@angular/core';
import { ReferencesInterface } from '../../references';
import { ReferencesService } from '../../references.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements AfterViewInit{
  
  referenceList = inject(ReferencesService);
  @ViewChildren('reference', { read: ElementRef }) examples!: QueryList<ElementRef>;
  ngAfterViewInit() {
    setTimeout(()=>{
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
            }else{}
      });
    },2000)
}
}