import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  animations: [fadeIn]
})
export class ContactoComponent implements OnInit {
  title = 'Contacto';
  emailContacto: string;

  constructor() { }

  ngOnInit() {
    console.log('contacto.component cargado!!');
  }

  guardarEmail(){
    localStorage.setItem('emailContacto',this.emailContacto);
  }

}
