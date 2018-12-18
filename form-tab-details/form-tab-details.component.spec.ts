import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTabDetailsComponent } from './form-tab-details.component';

describe('FormTabDetailsComponent', () => {
  let component: FormTabDetailsComponent;
  let fixture: ComponentFixture<FormTabDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTabDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
