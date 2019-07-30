import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar', [
        state('inactive', style({
          border: '3px solid #ccc'
        })),
        state('active', style({
          border: '3px solid yellow',
          background: 'red',
          borderRadius: '50px',
          transform: 'scale(1.2)'
        })),
        transition('inactive => active', animate('300ms linear')),
        transition('active => inactive', animate('300ms linear'))
    ])
  ]
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreDelParque: string;
  public miParque;
  public status;

  constructor() {
    this.titulo = 'Esta es la Tienda de Uniformes Escolares';
    this.status = 'inactive'
  }

  cambiarEstado(status){
    if(status == 'inactive'){
        this.status = 'active';
    }else{
        this.status = 'inactive';
    }
  }
  
  ngOnInit() {
    $('#textojq').hide();
     $('#botonjq').click(function(){
        console.log('click desde JQUERY');
        $('#textojq').slideToggle();
     });
      $("#caja").dotdotdot({});
  }

}
