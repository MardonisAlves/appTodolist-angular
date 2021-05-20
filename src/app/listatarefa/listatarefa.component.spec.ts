import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatarefaComponent } from './listatarefa.component';

describe('ListatarefaComponent', () => {
  let component: ListatarefaComponent;
  let fixture: ComponentFixture<ListatarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListatarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
