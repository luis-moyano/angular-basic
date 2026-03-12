import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolaComponent } from './hola/hola.component';
import { UniversityComponent } from "./pages/university/university.component";
import { CountryComponent } from "./pages/country/country.component";

@Component({
  selector: 'app-root',
  imports: [
    HolaComponent,
    UniversityComponent,
    RouterOutlet,
    CountryComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';
  mensaje: string= "Bienvenido";
}
