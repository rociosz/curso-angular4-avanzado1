import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreDelParque: string;

  constructor() {
    this.titulo = 'Esta es la Tienda de Uniformes Escolares';
  }

  mostrarNombre(){
    console.log(this.nombreDelParque);
  }

  ngOnInit() {
  }

}
