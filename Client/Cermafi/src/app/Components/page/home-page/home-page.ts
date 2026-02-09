import { Component } from '@angular/core';
import { SimpleGraphComponent } from '../../graphs/simple-graph/simple-graph.component';
import { CountdownTimer } from '../../elements/countdown-timer/countdown-timer';

@Component({
  selector: 'app-home-page',
  imports: [SimpleGraphComponent, CountdownTimer, ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
