import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmyrecipeComponent } from './viewmyrecipe.component';

describe('ViewmyrecipeComponent', () => {
  let component: ViewmyrecipeComponent;
  let fixture: ComponentFixture<ViewmyrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmyrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmyrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
