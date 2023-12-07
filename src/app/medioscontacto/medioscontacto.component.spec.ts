import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioscontactoComponent } from './medioscontacto.component';

describe('MedioscontactoComponent', () => {
  let component: MedioscontactoComponent;
  let fixture: ComponentFixture<MedioscontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedioscontactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedioscontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
