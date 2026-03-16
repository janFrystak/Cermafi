import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { Card } from 'primeng/card';
import { Message }from 'primeng/message'
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { filter, take } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [Card, ReactiveFormsModule, Message, ButtonModule, InputTextModule]
})
export class LoginComponent {
  currentYear = new Date().getFullYear();
  loginForm: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.isLoggedIn$.pipe(
      filter(loggedIn => loggedIn),
      take(1)
    ).subscribe(() => {
      this.router.navigate(['/admin/upload']);
    });

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.errorMessage = ''

    this.auth.login(this.loginForm.value).subscribe({
      next: () => {
        this.loading = false
        this.router.navigate(['/admin/upload']); // Redirect on success
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Login failed';
        this.loading = false;
      }
    });
  }
}