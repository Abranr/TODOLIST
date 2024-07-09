import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eliminar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './eliminar-tarea.component.html',
  styleUrl: './eliminar-tarea.component.css'
})
export class EliminarTareaComponent {
@Input() eliminarTareaRecibida: string[] = [];
@Input() recibirIndex: number = -1;

//Metodo para eliminar tarea
eliminrTarea(index: number){
  this.eliminarTareaRecibida.splice(index, 1);
}
}
