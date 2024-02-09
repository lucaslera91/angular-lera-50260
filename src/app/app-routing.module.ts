import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './layouts/dashboard/pages/alumnos/alumnos.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/dashboard/pages/admin/admin.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: AlumnosComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
