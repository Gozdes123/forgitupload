import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tes02Component } from './tes02.component';

describe('Tes02Component', () => {
  let component: Tes02Component;
  let fixture: ComponentFixture<Tes02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tes02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tes02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
