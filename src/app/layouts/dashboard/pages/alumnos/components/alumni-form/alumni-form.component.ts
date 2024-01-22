import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesData } from '../../models';

const COURSES_DATA: CoursesData = {
  courses: [
    'Ingenieria Civil',
    'Ingenieria Quimica',
    'Arquitectura',
    'Ingenieria Industrial',
    'Ingenieria en Sistemas',
  ],
};

@Component({
  selector: 'app-alumni-form',
  templateUrl: './alumni-form.component.html',
  styleUrl: './alumni-form.component.scss',
})
export class AlumniFormComponent {
  @Output()
  alumniSubmitted = new EventEmitter();

  courses: string[] = COURSES_DATA.courses;
  alumniForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.alumniForm = this.fb.group({
      fullName: this.fb.control('', Validators.required),
      year: this.fb.control('', Validators.required),
      major: this.fb.control('', Validators.required),
      state: this.fb.control('', Validators.required),
    });
  }
  onSubmit(): void {
    this.alumniForm.invalid ? 
      this.alumniForm.markAllAsTouched():
      this.alumniSubmitted.emit(this.alumniForm.value);
    
    this.alumniForm.reset();
    this.alumniForm.markAllAsTouched()
  }
}
