import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivereachmediaComponent } from './livereachmedia.component';

describe('LivereachmediaComponent', () => {
  let component: LivereachmediaComponent;
  let fixture: ComponentFixture<LivereachmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivereachmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivereachmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
