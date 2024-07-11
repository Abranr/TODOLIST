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

   //Array

   tareas: string[] = [];
   //LocalStorage

   constructor(@Inject(DOCUMENT) private document: Document) {
     const localStorage = document.defaultView?.localStorage;
     this.tareas = [];

     let datos = localStorage?.getItem('tareas');
     if (datos != null) {
       let arreglo = JSON.parse(datos);
       if (arreglo != null) {
         for(let tarea of arreglo){
           this.tareas.push(tarea);
         }

       }
     }
   }

 /*   actualizarLocalStorage() {
     localStorage.setItem('listado', JSON.stringify(this.tareas));
   } */

   //contador
   contador: number = 1;
   //propiedad para cambiar el estado de la tarea
   tareaCompletada: boolean[] = Array(this.tareas.length).fill(false);

   agregarTarea(nuevaTarea: string){
     this.tareas.push(nuevaTarea);
     this.contador++;
   }

   //Metodo para cambiar estado
   eliminarTarea(indice: number) {
     this.tareas.splice(indice, 1);
     this.tareaCompletada.splice(indice, 1);
     /*  console.log(this.tareaCompletada); */
   }

   //Metodo para limpiar los datos y el local storage

  cambiarEstado(indice:number){
   this.tareaCompletada[indice]=!this.tareaCompletada[indice]
  }
 }

