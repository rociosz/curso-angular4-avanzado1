import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  title = 'Alumnos';
  constructor() { }

  ngOnInit() {
    console.log('alumnos.component cargado!!');
  }

}
