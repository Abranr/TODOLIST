import { Component, Inject } from '@angular/core';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { EliminarTareaComponent } from '../eliminar-tarea/eliminar-tarea.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [AgregarTareaComponent, EliminarTareaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
})
export class ListaTareasComponent {
  
  tareas: string[] = [];

  // LocalStorage
  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage;

    let datos = localStorage?.getItem("listado");
    if (datos != null) {
      let arreglo = JSON.parse(datos);
      if (arreglo != null) {
        this.tareas = arreglo;
      }
    }
  }

  actualizarLocalStorage() {
    localStorage.setItem("listado", JSON.stringify(this.tareas));
  }

  // Contador
  contador: number = 1;

  // Propiedad para cambiar el estado de la tarea
  tareaCompletada: boolean[] = Array(this.tareas.length).fill(false);

  // Método para cambiar estado
  cambiarEstado(index: number) {
    this.tareaCompletada[index] = !this.tareaCompletada[index];
    this.actualizarLocalStorage();
  }

  // Método para limpiar los datos y el local storage
  limpiarDatos() {
    this.tareas = [];
    this.tareaCompletada = [];
    this.actualizarLocalStorage();
  }
}
