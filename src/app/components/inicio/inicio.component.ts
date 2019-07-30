import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {
  title = 'Bienvenido al COLEGIO';
  
  constructor() { }

  ngOnInit() {
    console.log('inicio.component cargado!!');
  }

}
