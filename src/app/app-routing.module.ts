// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IniciarComponent } from './iniciar/iniciar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReportarComponent } from './reportar/reportar.component';

const routes: Routes = [
  { path: 'iniciar', component: IniciarComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'reportar', component: ReportarComponent },
  { path: '', redirectTo: '/iniciar', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export {routes};