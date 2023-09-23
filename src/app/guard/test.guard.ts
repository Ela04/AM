import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {
  constructor(
    private router: Router,
    private stateService: StateService
  ){}

  canActivate(): boolean {
    //let tipo de variable que puede cambiar
    let isLogged : boolean = false; //inicializa en falso
    this.stateService.usersIsLogged().subscribe( //subscribiendose a la variable
    (logged)=>{
      isLogged = logged
    })

    if(isLogged == false){
      this.router.navigate(['/home']);
    }
    return isLogged; //false no va a dejar entrar a la ruta, true si
  
  }
  
}