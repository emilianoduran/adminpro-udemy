import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEmpresaComponent } from './data-empresa.component';

describe('DataEmpresaComponent', () => {
  let component: DataEmpresaComponent;
  let fixture: ComponentFixture<DataEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
