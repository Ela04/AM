import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

//Interfaz
interface Empleados{
  nombre: string;
  cargo: string;
}


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {


  //arreglo de empleados
  // Esta función crea un nuevo empleado

  empleados: Empleados[] = [
    {
      nombre: 'Juan',
      edad: 25,
      cargo: 'Ingeniero'
    },
    {
      nombre: 'Pedro',
      edad: 30,
      cargo: 'Mecanic0'
    },
    {
      nombre: 'Diego',
      edad: 35,
      cargo: 'Diseñador'
    }
  ]

  constructor(private router:Router, private stateService:StateService) { }

  ngOnInit() {
  }

  irACrear(){
    this.stateService.setTitulo = 'Crear empleado'
    this.router.navigate(['/crear-empleado'])
  }
}
