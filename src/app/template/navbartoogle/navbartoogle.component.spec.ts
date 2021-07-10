import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartoogleComponent } from './navbartoogle.component';

describe('NavbartoogleComponent', () => {
  let component: NavbartoogleComponent;
  let fixture: ComponentFixture<NavbartoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbartoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbartoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
