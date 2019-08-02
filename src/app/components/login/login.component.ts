import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
  })
  export class LoginComponent implements OnInit {
    public title: string;
    public user: User;
  
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
    ){
       this.title = 'Login de Usuarios';
       this.user = new User('','','','','','ROLE_USER','');
    }

    ngOnInit(){
        console.log('login.component cargando !!');
    }
    
    onSubmit(){
        console.log(this.user);
    }
}
  