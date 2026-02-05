import { Component } from '@angular/core';
import { SimpleGraphComponent } from '../../graphs/simple-graph/simple-graph.component';

@Component({
  selector: 'app-home-page',
  imports: [SimpleGraphComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
