import { Component } from '@angular/core';
import { LoginComponent } from '../../layout/login/login.component';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-login-page',
  imports: [LoginComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

  constructor(private title: Title) {
  this.title.setTitle('Admin | Přihlášení');
}
}
