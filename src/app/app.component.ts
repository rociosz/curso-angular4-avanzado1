import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit{
  title = 'Curso de Angular 4 Avanzado';
  emailContacto: string;

  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailContacto');
    //console.log(localStorage.getItem('emailContacto'));
  }

  ngDoCheck(){
    //console.log('El DoCheck se ha ejecutado');
    this.emailContacto = localStorage.getItem('emailContacto');
  }

}
