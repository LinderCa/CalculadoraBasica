import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeclaOperadorComponent } from './tecla-operador.component';

describe('TeclaOperadorComponent', () => {
  let component: TeclaOperadorComponent;
  let fixture: ComponentFixture<TeclaOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeclaOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeclaOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
