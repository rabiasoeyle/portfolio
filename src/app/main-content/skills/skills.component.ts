import { Component,ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('lineOne') right!: ElementRef;
  @ViewChild('lineTwo') left!: ElementRef;
  @ViewChild('mySkills') skills!: ElementRef;
  
  ngAfterViewInit() {
    let right = this.right.nativeElement;
    let left = this.left.nativeElement;
    let skills = this.skills.nativeElement;
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          right.classList.add('show');
          left.classList.add('showLeft');
          observer.unobserve(skills);
        } 
      });
    }, options);
    // observer.observe(right);
    // observer.observe(left);
    observer.observe(skills);

  }
}
