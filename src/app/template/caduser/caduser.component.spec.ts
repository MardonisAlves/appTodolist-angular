import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaduserComponent } from './caduser.component';

describe('CaduserComponent', () => {
  let component: CaduserComponent;
  let fixture: ComponentFixture<CaduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
