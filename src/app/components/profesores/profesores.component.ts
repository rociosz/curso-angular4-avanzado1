import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  title = 'Profesores';
  constructor() { }

  ngOnInit() {
    console.log('profesores.component cargado!!');
  }

}
