import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogModuleComponent } from './blog-module.component';

describe('BlogModuleComponent', () => {
  let component: BlogModuleComponent;
  let fixture: ComponentFixture<BlogModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
