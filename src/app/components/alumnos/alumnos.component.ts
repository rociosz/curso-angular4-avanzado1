import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'alumnos',
  templateUrl: './alumnos.component.html',
  animations: [fadeIn]
})
export class AlumnosComponent implements OnInit {
  title = 'Alumnos';
  constructor() { }

  ngOnInit() {
    console.log('alumnos.component cargado!!');
  }

}
