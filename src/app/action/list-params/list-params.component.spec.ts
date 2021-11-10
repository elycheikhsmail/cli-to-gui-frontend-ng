import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParamsComponent } from './list-params.component';

describe('ListParamsComponent', () => {
  let component: ListParamsComponent;
  let fixture: ComponentFixture<ListParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
