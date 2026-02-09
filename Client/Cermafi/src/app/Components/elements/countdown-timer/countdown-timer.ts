import { interval, Subscription } from 'rxjs';
import { Component, OnDestroy , signal, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  imports: [],
  templateUrl: './countdown-timer.html',
  styleUrl: './countdown-timer.css',
  standalone: true, 
})

export class CountdownTimer implements OnDestroy, OnInit{
   @Input() targetDate: Date = new Date('2026-04-13T08:00:00');
  

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => {
      this.calculateTimeLeft();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private calculateTimeLeft() {
    const now = new Date().getTime();
    const timeRemaining = this.targetDate.getTime() - now;

    if (timeRemaining > 0) {
      this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    } else {
      this.days = this.hours = this.minutes = this.seconds = 0;
    }
  }

  
}
