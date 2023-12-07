import { Routes } from '@angular/router';
import { IniciarComponent } from './iniciar/iniciar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReportarComponent } from './reportar/reportar.component';
import { DireccionComponent } from './direccion/direccion.component';
import { InfomedicaComponent } from './infomedica/infomedica.component';
import { ContactoemergenciaComponent } from './contactoemergencia/contactoemergencia.component';
import { MedioscontactoComponent } from './medioscontacto/medioscontacto.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { OrganizacionesComponent } from './organizaciones/organizaciones.component';

export const routes: Routes = [ 
{ path: 'iniciar', component: IniciarComponent },
{ path: 'registrar', component: RegistrarComponent },
{ path: 'reportar', component: ReportarComponent },
{ path: 'direccion', component: DireccionComponent },
{ path: 'infomedica', component: InfomedicaComponent },
{ path: 'contactoemergencia', component: ContactoemergenciaComponent},
{ path: 'medioscontacto', component: MedioscontactoComponent },
{ path: 'menu', component: MenuComponent },
{ path: 'usuarios', component: UsuariosComponent },
{ path: 'organizaciones', component: OrganizacionesComponent },
{ path: '', redirectTo: '/iniciar', pathMatch: 'full' },];
