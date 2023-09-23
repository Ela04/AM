import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RickymortyService } from '../service/rickymorty.service';
import { Observable } from 'rxjs';
import { StateService } from '../state/state.service';
//import { StateService } from '../state/state.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{
  //nombre!: string;
  // constructor(private router:Router, private stateService:StateService) {

  //   this.stateService.getNombre.subscribe((Usuario)=>{
  //     debugger;
  //     this.nombre = Usuario;
  //   })
  // }

  //Api
  personajes: any;
  constructor( 
    private rickymortyService: RickymortyService,
    private stateService: StateService
  ){}

  
    
}