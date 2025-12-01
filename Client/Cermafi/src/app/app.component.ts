import { Component } from '@angular/core';
import { SimpleGraphComponent } from "./Components/simple-graph/simple-graph.component";



@Component({
  standalone: true,
  selector: 'app-root',
  imports: [SimpleGraphComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cermafi';
}
