import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdAccordionBasicComponent } from './ngbd-accordion-basic.component';

describe('NgbdAccordionBasicComponent', () => {
  let component: NgbdAccordionBasicComponent;
  let fixture: ComponentFixture<NgbdAccordionBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdAccordionBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdAccordionBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
