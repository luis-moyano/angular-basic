import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolaComponent } from './hola/hola.component';

@Component({
  selector: 'app-root',
  imports: [HolaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';
  mensaje: string= "Bienvenido";
}
