import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing' ;

import { HomeComponent } from './home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to the Ford Weather Application!');
  });

  it('should render four mat cards', () => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.queryAll(By.css('mat-card'));
    expect(compiled.length).toEqual(4);
  });

  it('should render all preloaded text in first card', () => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('mat-card')).nativeElement;
    expect(compiled.textContent).toContain('MichiganCurrently  CelsiusLow:  CHigh:  C Launch Ten Day Forecast ');
  });

  it('should render all preloaded text in second card', () => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.queryAll(By.css('mat-card'));
    expect(compiled[1].nativeElement.textContent).toContain('IllinoisCurrently  CelsiusLow:  CHigh:  C Launch Ten Day Forecast ');
  });

  it('should render all preloaded text in third card', () => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.queryAll(By.css('mat-card'));
    expect(compiled[2].nativeElement.textContent).toContain('WashingtonCurrently  CelsiusLow:  CHigh:  C Launch Ten Day Forecast ');
  });

  it('should render all preloaded text in fourth card', () => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.queryAll(By.css('mat-card'));
    expect(compiled[3].nativeElement.textContent).toContain('New YorkCurrently  CelsiusLow:  CHigh:  C Launch Ten Day Forecast ');
  });

});
