import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExamplesComponent } from './project-examples.component';

describe('ProjectExamplesComponent', () => {
  let component: ProjectExamplesComponent;
  let fixture: ComponentFixture<ProjectExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectExamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
