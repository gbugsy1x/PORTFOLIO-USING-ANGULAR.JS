import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsWorkedOnComponent } from './projects-worked-on.component';

describe('ProjectsWorkedOnComponent', () => {
  let component: ProjectsWorkedOnComponent;
  let fixture: ComponentFixture<ProjectsWorkedOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsWorkedOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsWorkedOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
