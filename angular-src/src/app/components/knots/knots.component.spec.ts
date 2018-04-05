import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnotsComponent } from './knots.component';

describe('KnotsComponent', () => {
  let component: KnotsComponent;
  let fixture: ComponentFixture<KnotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
