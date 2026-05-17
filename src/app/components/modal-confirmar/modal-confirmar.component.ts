// Importamos lo necesario desde Angular e Ionic
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

// Declaramos el componente ModalConfirmar
@Component({
  selector: 'app-modal-confirmar', // etiqueta que usarás en otros templates
  template: `
    <!-- Modal de confirmación -->
    <ion-modal [isOpen]="isOpen">
      <ng-template>
        <!-- Encabezado del modal -->
        <ion-header>
          <ion-toolbar color="danger">
            <ion-title>Confirmar Eliminación</ion-title>
          </ion-toolbar>
        </ion-header>

        <!-- Contenido del modal -->
        <ion-content class="ion-padding">
          <p>
            ¿Estás seguro de que deseas eliminar permanentemente la publicación:
            <strong>"{{ avisoTitulo }}"</strong>?
          </p>
          
          <!-- Botones de acción -->
          <div style="display: flex; justify-content: space-around; margin-top: 20px;">
            <ion-button color="medium" (click)="cancelar()">Cancelar</ion-button>
            <ion-button color="danger" (click)="confirmar()">Sí, Eliminar</ion-button>
          </div>
        </ion-content>
      </ng-template>
    </ion-modal>
  `,
  standalone: true, // lo hace independiente, no necesita módulo extra
  imports: [CommonModule, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton]
})
export class ModalConfirmarComponent {
  // Recibe desde el padre si el modal está abierto o cerrado
  @Input() isOpen: boolean = false;

  // Recibe el título del aviso para mostrarlo en el mensaje
  @Input() avisoTitulo: string = '';

  // Emite eventos hacia el padre cuando el usuario confirma o cancela
  @Output() alConfirmar = new EventEmitter<void>();
  @Output() alCancelar = new EventEmitter<void>();

  // Función que se ejecuta al confirmar
  confirmar() {
    this.alConfirmar.emit(); // notifica al padre que debe eliminar
  }

  // Función que se ejecuta al cancelar
  cancelar() {
    this.alCancelar.emit(); // notifica al padre que se cerró sin eliminar
  }
}
