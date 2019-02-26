import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutComponent } from './about.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one mat card', () => {
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.queryAll(By.css('mat-card'));
    expect(compiled.length).toEqual(1);
  });

  it('should render one anchor element', () => {
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.queryAll(By.css('a'));
    expect(compiled.length).toEqual(1);
  });
});
