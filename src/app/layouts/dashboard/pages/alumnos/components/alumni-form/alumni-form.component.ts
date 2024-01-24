import { Component, EventEmitter, Output, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlumnInfo, CoursesData } from '../../models';

const COURSES_DATA: CoursesData = {
  majors: [
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
  @Input() alumn: AlumnInfo = {
    fullName: '',
    year: null,
    major: '',
    status: '',
  };

  majors: string[] = COURSES_DATA.majors;
  alumniForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.alumniForm = this.fb.group({
      fullName: this.fb.control('', Validators.required),
      year: this.fb.control('', Validators.required),
      major: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required),
    });
  }

  ngOnInit() {
    this.alumniForm = this.fb.group({
      fullName: this.alumn.fullName,
      year: this.alumn.year,
      major: this.alumn.major,
      status: this.alumn.status,
    });
  }

  onSubmit(): void {
    this.alumniForm.invalid
      ? this.alumniForm.markAllAsTouched()
      : this.alumniSubmitted.emit(this.alumniForm.value);

    this.alumniForm.reset();
  }
}
