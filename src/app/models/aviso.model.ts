export interface Aviso {
  id?: number;              // Autoincremental
  titulo: string;           // Mínimo 5 caracteres
  descripcion: string;      // Mínimo 20 caracteres
  fecha: string;            // Fecha actual 
  foto: string;             // Path de la cámara 
}

// Este modelo es un "contrato" entre las distintas partes del sistema (formulario, base de datos y cámara)
// Con esto se estandariza la estructura de los avisos
// sirve de referencia para las validaciones del formulario
// Facilta la persistencia de SQLite y la integración de la cámara 

