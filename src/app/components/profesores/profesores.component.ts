import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'profesores',
  templateUrl: './profesores.component.html',
  animations: [fadeIn] 
})
export class ProfesoresComponent implements OnInit {
  title = 'Profesores';
  constructor() { }

  ngOnInit() {
    console.log('profesores.component cargado!!');
  }

}
