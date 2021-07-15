import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardvalortarefaComponent } from './cardvalortarefa.component';

describe('CardvalortarefaComponent', () => {
  let component: CardvalortarefaComponent;
  let fixture: ComponentFixture<CardvalortarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardvalortarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardvalortarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
