import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  animations: [fadeIn] 
})
export class InicioComponent implements OnInit {
  title = 'Bienvenido al COLEGIO';
  
  constructor() { }

  ngOnInit() {
    console.log('inicio.component cargado!!');
  }

}
