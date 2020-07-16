import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecipeComponent } from './viewrecipe.component';

describe('ViewrecipeComponent', () => {
  let component: ViewrecipeComponent;
  let fixture: ComponentFixture<ViewrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
