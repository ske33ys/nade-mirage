import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mid } from './mid';

describe('Mid', () => {
  let component: Mid;
  let fixture: ComponentFixture<Mid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
