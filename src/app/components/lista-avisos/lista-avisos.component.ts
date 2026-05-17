import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { Aviso } from '../../models/aviso.model';
import { ModalConfirmarComponent } from '../modal-confirmar/modal-confirmar.component';

@Component({
  selector: 'app-lista-avisos',
  template: `
    <div *ngIf="avisos && avisos.length === 0" class="ion-text-center ion-padding" style="margin-top: 50px; color: gray;">
      <p>No hay avisos publicados en Peor es Nada.</p>
    </div>

    <ion-card *ngFor="let item of avisos">
      <img *ngIf="item.foto" [src]="item.foto" alt="Foto del aviso" style="width: 100%; max-height: 220px; object-fit: cover;" />
      
      <ion-card-header>
        <ion-card-title>{{ item.titulo }}</ion-card-title>
        <ion-card-subtitle>{{ item.fecha | date:'dd/MM/yyyy HH:mm' }}</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <p>{{ item.descripcion }}</p>
        <div style="display: flex; justify-content: flex-end; margin-top: 12px;">
          <ion-button color="danger" fill="clear" (click)="solicitarEliminar(item)">
            Eliminar
          </ion-button>
        </div>
      </ion-card-content>
    </ion-card>

    <app-modal-confirmar 
      [isOpen]="modalAbierto" 
      [avisoTitulo]="avisoSeleccionado?.titulo || ''"
      (alConfirmar)="confirmarEliminacion()"
      (alCancelar)="cerrarModal()">
    </app-modal-confirmar>
  `,
  standalone: true,
  imports: [CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, ModalConfirmarComponent]
})
export class ListaAvisosComponent {
  @Input() avisos: Aviso[] = [];
  @Output() alEliminarAviso = new EventEmitter<number>();

  // Lista de avisos recibida desde HomePage
  modalAbierto: boolean = false;
  avisoSeleccionado: Aviso | null = null;

  // Evento que emite el ID del aviso a eliminar
  solicitarEliminar(aviso: Aviso) {
    this.avisoSeleccionado = aviso;
    this.modalAbierto = true;
  }
  // Cierra el modal y limpia selección
  cerrarModal() {
    this.modalAbierto = false;
    this.avisoSeleccionado = null;
  }
  // Confirma eliminación y emite el ID al padre
  confirmarEliminacion() {
    if (this.avisoSeleccionado && this.avisoSeleccionado.id !== undefined) {
      this.alEliminarAviso.emit(this.avisoSeleccionado.id);
    }
    this.cerrarModal();
  }
} 