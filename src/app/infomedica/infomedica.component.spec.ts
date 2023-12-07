import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomedicaComponent } from './infomedica.component';

describe('InfomedicaComponent', () => {
  let component: InfomedicaComponent;
  let fixture: ComponentFixture<InfomedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfomedicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfomedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
