import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvListComponent } from './vv-list.component';

describe('VvListComponent', () => {
  let component: VvListComponent;
  let fixture: ComponentFixture<VvListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
