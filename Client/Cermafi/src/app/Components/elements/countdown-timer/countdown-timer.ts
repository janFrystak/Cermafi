import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown-timer',
  imports: [CommonModule],
  templateUrl: './countdown-timer.html',
  styleUrl: './countdown-timer.css',
  standalone: true, 
})

export class CountdownTimer implements OnDestroy, OnInit{
  announced: boolean = true
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private interval: any;
  private targetDate: Date | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ date: string | null }>(`${environment.back_url}/config/countdown`)
      .subscribe({
        next: (res) => {
          if (!res.date) {
            this.announced = false;
            return;
          }
          this.targetDate = new Date(res.date);
          if (this.targetDate < new Date()) {
            this.announced = false;
            return;
          }
          this.startCountdown();
        },
        error: () => {
          this.announced = false;
        }
      });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private startCountdown(): void {
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const target = this.targetDate!.getTime();
      const diff = target - now;

      if (diff <= 0) {
        this.announced = false;
        clearInterval(this.interval);
        return;
      }

      this.days    = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    }, 1000);
  }

  
}
