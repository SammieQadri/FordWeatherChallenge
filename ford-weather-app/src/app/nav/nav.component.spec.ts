import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavComponent } from './nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render four anchor elements', () => {
    fixture = TestBed.createComponent(NavComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.queryAll(By.css('a'));
    expect(compiled.length).toEqual(4);
  });

  it('should render three links', () => {
    fixture = TestBed.createComponent(NavComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.queryAll(By.css('li'));
    expect(compiled.length).toEqual(3);
  });
});
