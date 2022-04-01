import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetComponent } from './closet.component';

describe('ClosetComponent', () => {
  let component: ClosetComponent;
  let fixture: ComponentFixture<ClosetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
