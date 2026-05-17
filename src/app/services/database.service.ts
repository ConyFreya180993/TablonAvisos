import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Aviso } from '../models/aviso.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  
  // ============================================================================
  // PROMESA DE CONTROL: Guardará el estado de la inicialización
  // ============================================================================
  private dbReady: Promise<void>;

  constructor() {
    // Apenas nace el servicio, iniciamos la base de datos y guardamos su promesa
    this.dbReady = this.inicializarBaseDeDatos();
  }

  // 1. Inicializar la base de datos
  async inicializarBaseDeDatos() {
    try {
      this.db = await this.sqlite.createConnection('peor_es_nada.db', false, 'no-encryption', 1, false);
      await this.db.open();

      // 2. Crear la tabla "avisos" si no existe
      const schema = `
        CREATE TABLE IF NOT EXISTS avisos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          titulo TEXT NOT NULL,
          descripcion TEXT NOT NULL,
          fecha TEXT NOT NULL,
          foto TEXT
        );
      `;
      await this.db.execute(schema);
    } catch (error) {
      console.error('Error al inicializar DB:', error);
    }
  }

  // 3. Insertar un nuevo aviso en la tabla
  async agregarAviso(aviso: Aviso) {
    // Asegura que la DB esté abierta antes de insertar
    await this.dbReady; 
    const sql = `INSERT INTO avisos (titulo, descripcion, fecha, foto) VALUES (?, ?, ?, ?)`;
    const params = [aviso.titulo, aviso.descripcion, aviso.fecha, aviso.foto];
    return await this.db.run(sql, params);
  }

  // 4. Obtener todos los avisos
  async obtenerAvisos() {
    // CONGELA la ejecución aquí hasta que la DB esté 100% lista y abierta
    await this.dbReady; 
    const sql = `SELECT * FROM avisos ORDER BY id DESC`;
    const resultado = await this.db.query(sql);
    return resultado.values as Aviso[];
  }

  // 5. Eliminar un aviso por ID
  async eliminarAviso(id: number) {
    // Asegura que la DB esté abierta antes de eliminar
    await this.dbReady; 
    const sql = `DELETE FROM avisos WHERE id = ?`;
    return await this.db.run(sql, [id]);
  }
}
