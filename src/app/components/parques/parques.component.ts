import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html'
})
export class ParquesComponent implements OnInit {
  @Input() nombre: string;
  @Input('metros_cuadrados') metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.nombre = 'Parque natural para caballos';
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = false;
  }

  emitirEvento(){
    this.pasameLosDatos.emit({
          'nombre': this.nombre,
          'metros': this.metros,
          'vegetacion': this.vegetacion,
          'abierto': this.abierto
    });
  }

  ngOnInit() {
  }

}
