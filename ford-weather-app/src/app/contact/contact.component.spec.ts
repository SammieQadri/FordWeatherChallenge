import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one mat card', () => {
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.queryAll(By.css('mat-card'));
    expect(compiled.length).toEqual(1);
  });

  it('should render one anchor element', () => {
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.queryAll(By.css('a'));
    expect(compiled.length).toEqual(1);
  });
});
