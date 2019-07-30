// Importar modulos necesarios para crear modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importar componentes
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

// Decorar ngModule para cargar los componentes y la configuración de los modulos
@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
  	declarations: [
	    GuardarEmailComponent,
	    MostrarEmailComponent,
	    MainEmailComponent
  	],
  	exports: [MainEmailComponent]
})
export class ModuloEmailModule { }
