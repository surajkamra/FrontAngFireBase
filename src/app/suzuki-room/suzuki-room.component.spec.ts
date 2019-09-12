import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuzukiRoomComponent } from './suzuki-room.component';

describe('SuzukiRoomComponent', () => {
  let component: SuzukiRoomComponent;
  let fixture: ComponentFixture<SuzukiRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuzukiRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuzukiRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
