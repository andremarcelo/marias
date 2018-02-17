import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProductHighligthsComponent } from './dashboard-product-highligths.component';

describe('DashboardProductHighligthsComponent', () => {
  let component: DashboardProductHighligthsComponent;
  let fixture: ComponentFixture<DashboardProductHighligthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProductHighligthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProductHighligthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
