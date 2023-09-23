import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {
  constructor(
    private router: Router,
  ){}

  canActivate(): boolean {
    this.router.navigate(['/home']);
    return false; //false no va a dejar entrar a la ruta, true si
  }
  
}