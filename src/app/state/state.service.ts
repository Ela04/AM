import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  nombre: BehaviorSubject<string> = new BehaviorSubject('');
  get getNombre(){
    return this.nombre.asObservable();
  }
  set setNombre(nombre:string){
    this.nombre.next(nombre);
  }
  constructor() { }
}