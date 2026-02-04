import { Component } from '@angular/core';
import { SimpleGraphComponent } from "./Components/graphs/simple-graph/simple-graph.component";
import { Navbar } from "./Components/layout/navbar/navbar";






@Component({
  standalone: true,
  selector: 'app-root',
  imports: [SimpleGraphComponent, Navbar],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cermafi';
}
