import { Component } from '@angular/core';
import { Navbar } from "./Components/layout/navbar/navbar";
import { RouterOutlet } from "@angular/router";



@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cermafi';
}
