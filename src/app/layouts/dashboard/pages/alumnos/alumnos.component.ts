import { Component } from '@angular/core';
import { AlumniData, AlumnInfo } from './models';

const ALUMNI_DATA: AlumnInfo[] = [
  { fullName: 'Juan', year: 1, major: 'Ingenieria Industrial', status: 'Regular' },
  {
    fullName: 'Pedro',
    year: 1,
    major: 'Ingenieria en Sistemas',
    status: 'Regular',
  },
  {
    fullName: 'Guillermo',
    year: 2,
    major: 'Ingenieria Industrial',
    status: 'No regular',
  },
];
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent {
  alumnsData: AlumniData = { alumni: ALUMNI_DATA };
  onAlumniSubtmitted(ev: AlumnInfo): void {
    // this.alumnsData.alumni.push(ev)
    this.alumnsData.alumni = [...this.alumnsData.alumni, ev];
  }
}
