import { Component } from '@angular/core';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTareasComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
