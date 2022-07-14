import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCursosComponent } from './inserir-cursos.component';

describe('InserirCursosComponent', () => {
  let component: InserirCursosComponent;
  let fixture: ComponentFixture<InserirCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
