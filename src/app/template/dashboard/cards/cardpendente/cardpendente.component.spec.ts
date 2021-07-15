import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpendenteComponent } from './cardpendente.component';

describe('CardpendenteComponent', () => {
  let component: CardpendenteComponent;
  let fixture: ComponentFixture<CardpendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardpendenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
