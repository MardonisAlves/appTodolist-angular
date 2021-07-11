import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlistaComponent } from './cardlista.component';

describe('CardlistaComponent', () => {
  let component: CardlistaComponent;
  let fixture: ComponentFixture<CardlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardlistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
