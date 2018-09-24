import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackKnightsComponent } from './black-knights.component';

describe('BlackKnightsComponent', () => {
  let component: BlackKnightsComponent;
  let fixture: ComponentFixture<BlackKnightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackKnightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackKnightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
