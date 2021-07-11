import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtarefaconcluidaComponent } from './cardtarefaconcluida.component';

describe('CardtarefaconcluidaComponent', () => {
  let component: CardtarefaconcluidaComponent;
  let fixture: ComponentFixture<CardtarefaconcluidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardtarefaconcluidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardtarefaconcluidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
