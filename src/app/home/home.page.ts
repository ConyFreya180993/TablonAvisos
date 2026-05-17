import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, 
  IonLabel, IonThumbnail, IonSearchbar, IonFab, IonFabButton, 
  IonIcon, IonItemSliding, IonItemOptions, IonItemOption, AlertController,
  Platform
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { Aviso } from '../models/aviso.model';
import { addIcons } from 'ionicons'; 
import { add, trash } from 'ionicons/icons'; 
import { ListaAvisosComponent } from '../components/lista-avisos/lista-avisos.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterModule, IonHeader, IonToolbar, IonTitle,
    IonContent, IonList, IonItem, IonLabel, IonThumbnail,
    IonSearchbar, IonFab, IonFabButton, IonIcon, IonItemSliding,
    IonItemOptions, IonItemOption, ListaAvisosComponent
  ],
})
export class HomePage implements OnInit {
  
  avisosOriginales: Aviso[] = []; // respaldo con todos los avisos
  avisos: Aviso[] = [];           // lista filtrada que se muestra

  constructor(
    private db: DatabaseService,
    private alertController: AlertController,
    private platform: Platform
  ) {
    addIcons({ add, trash }); 
  }

  async ngOnInit() {
    // Espera a que el entorno esté listo y carga avisos
    await this.platform.ready();
    await this.cargarAvisos();
  }

  async ionViewWillEnter() {
    // Refresca la lista al volver desde otra página
    await this.cargarAvisos();
  }

  async cargarAvisos() {
    this.avisosOriginales = await this.db.obtenerAvisos();
    this.avisos = [...this.avisosOriginales];
  }

  async eliminarAvisoDesdeTablon(id: number) {
    if (id) {
      await this.db.eliminarAviso(id);
      await this.cargarAvisos(); 
    }
  }

  buscarAviso(event: any) {
    const texto = event.target.value?.toLowerCase() || '';
    if (texto.trim() === '') {
      this.avisos = [...this.avisosOriginales];
    } else {
      this.avisos = this.avisosOriginales.filter(aviso =>
        aviso.titulo.toLowerCase().includes(texto) ||
        aviso.descripcion.toLowerCase().includes(texto)
      );
    }
  }
}

// Nota: en el título de la página principal, se colocó un kaemoji como logo creativo temporal.
// Se hizo en sintonía con el nombre de la comunidad y a modo de "placeholder" para un futuro logo.