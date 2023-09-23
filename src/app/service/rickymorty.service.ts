import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RickymortyService {

  constructor(
    //variable + contrato interfaz +
    private http: HttpClient){}
  
  getCharacters(): Observable<any>{ 
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
}
