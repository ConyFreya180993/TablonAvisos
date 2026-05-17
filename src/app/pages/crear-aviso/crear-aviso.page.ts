import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// Controladores de interfaz y alertas
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonTextarea, 
  IonButton, IonItem, IonLabel, IonButtons, IonBackButton, IonIcon, ToastController, AlertController 
} from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.page.html',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonInput, IonTextarea, IonButton, IonItem, IonLabel, 
    IonButtons, IonBackButton, IonIcon
  ]
})
export class CrearAvisoPage {
  // Formulario reactivo para título y descripción
  avisoForm: FormGroup;

  // Ruta de la foto capturada (si existe)
  fotoCapturada: string | undefined = undefined;

  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private router: Router,
    private toast: ToastController,
    private alertController: AlertController // Controlador de alertas para errores
  ) {
    // Se agrega el ícono de cámara
    addIcons({ camera });

    // Inicialización del formulario con validaciones
    this.avisoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  // Función para capturar una foto con la cámara
  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });
      this.fotoCapturada = image.webPath; // Guarda la ruta de la foto
    } catch (e) {
      console.log('Cámara cancelada o fallida');
    }
  }

  // Función para guardar un aviso en la base de datos
  async guardar() {
    // Si el formulario es inválido, no continúa
    if (this.avisoForm.invalid) return;

    try {
      // Construcción del objeto aviso con fecha automática
      const nuevoAviso = {
        titulo: this.avisoForm.value.titulo,
        descripcion: this.avisoForm.value.descripcion,
        fecha: new Date().toISOString(),
        foto: this.fotoCapturada || ''
      };

      // Inserta aviso en SQLite
      await this.db.agregarAviso(nuevoAviso);

      // Muestra mensaje de éxito
      const t = await this.toast.create({
        message: 'Aviso publicado con éxito 🚀',
        duration: 2000,
        color: 'success'
      });
      await t.present();

      // Redirige a la página principal
      this.router.navigate(['/home']);

    } catch (error: any) {
      // Si ocurre un error, muestra alerta con detalle
      const alert = await this.alertController.create({
        header: 'Error Detectado',
        message: error.message || JSON.stringify(error),
        buttons: ['Entendido']
      });
      await alert.present();
    }
  }
}
