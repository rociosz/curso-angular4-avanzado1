import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importando los Componentes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

// Configuración de las Rutas Hijas
const adminRoutes: Routes = [
	{
		path: 'admin-panel',
		component: MainComponent,
		children: [
			{ path: '', redirectTo: 'listado', pathMatch: 'full' },
			{ path: 'listado', component: ListComponent },
			{ path: 'crear', component: AddComponent },
			{ path: 'editar', component: EditComponent }
		]
	},
	{ path: 'listado-del-panel', component: ListComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(adminRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AdminRoutingModule { }
