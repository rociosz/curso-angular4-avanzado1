// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';


// Componentes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
	declarations: [
		MainComponent,
		ListComponent,
		AddComponent,
		EditComponent
	],
	imports: [
		CommonModule,
		FormsModule,
    	ReactiveFormsModule,
    	HttpClientModule,
    	AdminRoutingModule
	],
	exports: [
		MainComponent,
		ListComponent,
		AddComponent,
		EditComponent
	],
	providers: []
})
export class AdminModule { }
