import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisAvisosPage } from './mis-avisos.page';

describe('MisAvisosPage', () => {
  let component: MisAvisosPage;
  let fixture: ComponentFixture<MisAvisosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisAvisosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
