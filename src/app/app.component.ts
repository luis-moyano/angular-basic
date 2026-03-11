import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolaComponent } from './hola/hola.component';
import { UniversityComponent } from "./pages/university/university.component";

@Component({
  selector: 'app-root',
  imports: [
    HolaComponent,     
    UniversityComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';
  mensaje: string= "Bienvenido";
}
