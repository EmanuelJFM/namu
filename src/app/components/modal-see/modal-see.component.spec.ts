import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSeeComponent } from './modal-see.component';

describe('ModalSeeComponent', () => {
  let component: ModalSeeComponent;
  let fixture: ComponentFixture<ModalSeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSeeComponent]
    });
    fixture = TestBed.createComponent(ModalSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
