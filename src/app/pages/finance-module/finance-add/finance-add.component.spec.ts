import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAddComponent } from './finance-add.component';

describe('FinanceAddComponent', () => {
  let component: FinanceAddComponent;
  let fixture: ComponentFixture<FinanceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
