import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
  	<div class="panel panel-default">
	  	<h2>{{title}}</h2>
	  	<hr/>
	  	
	  	<mostrar-email></mostrar-email>
	    <guardar-email></guardar-email>
    </div>
  `
})
export class MainEmailComponent implements OnInit{
  title = 'Modulo de Email';

  ngOnInit(){
  	console.log("Componente principal del modulo cargado");
  }
}
