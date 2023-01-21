import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tes01Component } from './tes01.component';

describe('Tes01Component', () => {
  let component: Tes01Component;
  let fixture: ComponentFixture<Tes01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tes01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tes01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
