import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleGraphComponent } from "./Components/simple-graph/simple-graph.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SimpleGraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cermafi';
}
