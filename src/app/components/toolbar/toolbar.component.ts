import { Component } from '@angular/core';
import { isLoggedIn, login, logout } from 'src/app/helpers';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  loginStatus = isLoggedIn();
  
  handleCheckChange(event: Event) {
    const { target } = event as InputEvent;

    return (target as HTMLInputElement).checked ? login() : logout();
  }
}
