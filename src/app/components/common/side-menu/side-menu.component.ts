import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'travel-side-menu',
  imports: [
    CommonModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  option: string = 'warehouse';

  showOption(option: string) {
    console.log('Option selected:', option);
  }

}