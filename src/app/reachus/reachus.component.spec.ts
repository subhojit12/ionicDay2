import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachusPage } from './reachus.page';

describe('ReachusPage', () => {
  let component: ReachusPage;
  let fixture: ComponentFixture<ReachusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
