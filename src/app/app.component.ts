import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'Curso de Angular 4 Avanzado';

  ngDoCheck(){
    console.log('El DoCheck se ha ejecutado');
  }

}
