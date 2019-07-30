import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { AppRoutingModule } from './app-routing.module';

// Importar nuestros nuevos modulos
import { ModuloEmailModule } from './moduloemail/moduloemail.module';
//import { AdminModule } from './admin/admin.module';

//Componentes//
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    InicioComponent,
    ContactoComponent,
    ProfesoresComponent,
    AlumnosComponent,
  ],
  imports: [
    BrowserModule,
    ModuloEmailModule,
    //AdminModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    //AppRoutingModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
