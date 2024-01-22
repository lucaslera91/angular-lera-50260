import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniFormComponent } from './alumni-form.component';

describe('AlumniFormComponent', () => {
  let component: AlumniFormComponent;
  let fixture: ComponentFixture<AlumniFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumniFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
