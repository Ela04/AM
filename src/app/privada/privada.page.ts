import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-privada',
  templateUrl: './privada.page.html',
  styleUrls: ['./privada.page.scss'],
})
export class PrivadaPage implements OnInit {
  formulariousuario:FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private stateService:StateService) { 
    this.formulariousuario=this.fb.group({
      nombre:[""],
      contraseña:[""],
    })
  }

  ngOnInit() {
  }

  grabarusuario(){
    console.log("Ingresando a la funcion")
    const Usuario={
      nombre:this.formulariousuario.get('nombre')?.value,
      contraseña:this.formulariousuario.get('contraseña')?.value,
    }
    console.log(Usuario)
    this.stateService.setNombre = Usuario.nombre
    this.router.navigate(['home'])
  }
}
