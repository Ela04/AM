import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
formulariocrearempleado:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.formulariocrearempleado=this.fb.group({
      nombre:[""],
      edad:[0],
      cargo:[""]
    })
  }

  ngOnInit() {
  }

  grabarEmpleado(){
    console.log("Ingresando a la funcion")
    const empleado={
      nombre:this.formulariocrearempleado.get('nombre')?.value,
      edad:this.formulariocrearempleado.get('edad')?.value,
      cargo:this.formulariocrearempleado.get('cargo')?.value
    }
    if(empleado.edad >= 18) {

      console.log(empleado)
      return
    }
    console.log("No es mayor de edad")
  }

}