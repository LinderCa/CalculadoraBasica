import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeclaNumericaComponent } from './tecla-numerica.component';

describe('TeclaNumericaComponent', () => {
  let component: TeclaNumericaComponent;
  let fixture: ComponentFixture<TeclaNumericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeclaNumericaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeclaNumericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
