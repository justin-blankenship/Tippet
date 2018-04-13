import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyingComponent } from './tying.component';

describe('TyingComponent', () => {
  let component: TyingComponent;
  let fixture: ComponentFixture<TyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
