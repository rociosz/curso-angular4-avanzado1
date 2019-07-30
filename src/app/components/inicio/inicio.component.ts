import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'Inicio';
  constructor() { }

  ngOnInit() {
    console.log('inicio.component cargado!!');
  }

}
