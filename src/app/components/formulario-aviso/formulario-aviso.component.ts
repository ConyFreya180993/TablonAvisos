import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-aviso',
  templateUrl: './formulario-aviso.component.html',
  styleUrls: ['./formulario-aviso.component.scss'],
  standalone: true,
})
export class FormularioAvisoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

// Aca por tiempo, no se alcanzó a hacer el modal para la creación de avisos nuevos 
// que si se implementó en "eliminar aviso"