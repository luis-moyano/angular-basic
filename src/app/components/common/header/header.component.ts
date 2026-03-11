import { Component, Input } from '@angular/core';
import { UserInfo } from '../../../interfaces/user-info.interface';

@Component({
  selector: 'travel-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Input() userInfo: UserInfo = { name: 'Travel App', email: '', username: '' };
}