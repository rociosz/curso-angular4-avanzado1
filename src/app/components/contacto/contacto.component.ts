import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
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
