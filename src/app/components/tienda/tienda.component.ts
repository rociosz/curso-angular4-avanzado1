import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo;

  constructor() {
    this.titulo = 'Esta es la Tienda de Uniformes Escolares';
  }

  ngOnInit() {
  }

}
