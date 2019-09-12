import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastalComponent } from './castal.component';

describe('CastalComponent', () => {
  let component: CastalComponent;
  let fixture: ComponentFixture<CastalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
