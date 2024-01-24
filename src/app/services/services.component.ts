import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import { AlumnInfo } from '../layouts/dashboard/pages/alumnos/models';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  list: AlumnInfo[] = [
    {
      fullName: 'Estudiante1',
      year: 1,
      major: 'Informática',
      status: 'Activo',
    },
    {
      fullName: 'Estudiante2',
      year: 2,
      major: 'Matemáticas',
      status: 'Inactivo',
    },
  ];
  getAllAlumni() {
    return this.list;
  }
  addAlumni(ev: AlumnInfo) {
    const index = this.list.findIndex((obj) => obj.fullName === ev.fullName);
    index === -1
      ? (this.list = [...this.list, ev])
      : (this.list[index] = ev);
  }
  deleteAlumni(ev: AlumnInfo) {
    const newArray = this.list.filter(
      (elemento) => elemento.fullName !== ev.fullName
    );
    this.list = this.list.filter(
      (elemento) => elemento.fullName !== ev.fullName
    );
    this.list = [...newArray];
  }
}
