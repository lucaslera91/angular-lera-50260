import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersModule } from './pages/users/users.module';
import { ProfesoresModule } from './pages/profesores/profesores.module';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { AdminModule } from './pages/admin/admin.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    UsersModule,
    ProfesoresModule,
    AlumnosModule,
    AdminModule,

  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
