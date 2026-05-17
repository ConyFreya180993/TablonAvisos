import { Component, OnInit } from '@angular/core'; // 1. Se agrega OnInit para ejecutar código al iniciar
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { DatabaseService } from './services/database.service'; // 2. Se importa el servicio de base de datos

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit { // 3. Se implementa OnInit para inicializar la app
  
  // 4. Inyección del servicio DatabaseService
  constructor(private db: DatabaseService) {}

  // 5. Inicialización automática de la base de datos al arrancar la aplicación
  async ngOnInit() {
    await this.db.inicializarBaseDeDatos();
    console.log('Base de datos lista para la comunidad Peor es Nada');
  }
}

// Nota:
// Este componente raíz ejecuta la inicialización de la base de datos al iniciar la aplicación.
// Permite que las tablas estén disponibles antes de que el usuario interactúe con las páginas.
// Cumple con los puntos 4 y 6 de la pauta (persistencia y fecha actual).
