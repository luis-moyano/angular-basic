import { Component } from '@angular/core';
import { HolaComponent } from './hola/hola.component';


@Component({
  selector: 'app-hola',
  imports: [HolaComponent],
  templateUrl: './hola.component.html',
  styleUrl: './hola.component.css'
})
export class HolaComponent {

}
