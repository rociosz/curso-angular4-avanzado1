import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { TiendaComponent } from './components/tienda/tienda.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
    //{path: '', component: InicioComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: InicioComponent},
    {path: 'alumnos', component: AlumnosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'profesores', component: ProfesoresComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: InicioComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);