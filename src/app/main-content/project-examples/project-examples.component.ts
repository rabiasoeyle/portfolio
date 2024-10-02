import { Component, inject,ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ExampleComponent } from './example/example.component';
import { ProjectInterface } from '../../project';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-examples',
  standalone: true,
  imports: [ExampleComponent],
  templateUrl: './project-examples.component.html',
  styleUrl: './project-examples.component.scss'
})
export class ProjectExamplesComponent implements AfterViewInit{
  @ViewChildren('example', { read: ElementRef }) examples!: QueryList<ElementRef>;
  
  ngAfterViewInit() {
    this.examples.forEach((example, index) => {
      console.log('Element:', example.nativeElement, 'Index:', index);
      if(index== 1){
        const elementRight = example.nativeElement;
        const options = {
          root: null,
          rootMargin: '100px',
          threshold: 0.5,
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
      }else{
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
  }});
  }

  projects: ProjectInterface[];
  projectlistdata= inject(ProjectService)
  constructor(){
    this.projects = this.projectlistdata.projectlist;
    console.log(this.projects)
}

}

