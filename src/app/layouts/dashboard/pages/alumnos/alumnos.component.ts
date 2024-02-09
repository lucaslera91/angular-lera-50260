import { Component, Output, EventEmitter } from '@angular/core';
import { AlumnInfo } from './models';
import { ServicesComponent } from '../../../../services/services.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent {
  @Output()
  alumniSubmitted = new EventEmitter();
  
  dataSource = this.alumniList.getAllAlumni();
  constructor(private alumniList: ServicesComponent) {}
  showForm = false;
  onAlumniSubtmitted(ev: AlumnInfo): void {
    this.alumniList.addAlumni(ev);
    this.dataSource = this.alumniList.getAllAlumni();
  }
  onAlumniDelete(ev: AlumnInfo) {
    this.alumniList.deleteAlumni(ev);
    this.dataSource = this.alumniList.getAllAlumni();
  }
  onAlumniEdit(ev: AlumnInfo) {
    this.showForm = !this.showForm;
  }
}
