import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActionParamsComponent } from './add-action-params.component';

describe('AddActionParamsComponent', () => {
  let component: AddActionParamsComponent;
  let fixture: ComponentFixture<AddActionParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActionParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActionParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
