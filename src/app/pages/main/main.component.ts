import { Component } from '@angular/core';
import { SideMenuComponent } from "../../components/common/side-menu/side-menu.component";
import { HeaderComponent } from '../../components/common/header/header.component';
import { UserInfo } from '../../interfaces/user-info.interface';

@Component({
  selector: 'travel-main',
  imports: [
    HeaderComponent,
    SideMenuComponent
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