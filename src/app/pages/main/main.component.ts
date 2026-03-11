import { Component } from '@angular/core';
import { SideMenuComponent } from "../../components/common/side-menu/side-menu.component";
import { HeaderComponent } from '../../components/common/header/header.component';
import { UserInfo } from '../../interfaces/user-info.interface';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'travel-main',
  imports: [
    HeaderComponent,
    SideMenuComponent,
    RouterOutlet
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  userInfo: UserInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'johndoe'
  }
}