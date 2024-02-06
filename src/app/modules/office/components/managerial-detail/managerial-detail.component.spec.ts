import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerialDetailComponent } from './managerial-detail.component';

describe('ManagerialDetailComponent', () => {
  let component: ManagerialDetailComponent;
  let fixture: ComponentFixture<ManagerialDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerialDetailComponent]
    });
    fixture = TestBed.createComponent(ManagerialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
