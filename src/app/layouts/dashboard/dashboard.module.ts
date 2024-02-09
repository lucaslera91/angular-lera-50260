import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { AdminModule } from './pages/admin/admin.module';
import { MatListModule } from '@angular/material/list';
import { CursosModule } from './pages/cursos/cursos.module';
import { InscripcionesModule } from './pages/inscripciones/inscripciones.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule,
    AdminModule,
    MatListModule,
    RouterModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
