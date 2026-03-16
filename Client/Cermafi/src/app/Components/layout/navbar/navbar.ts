import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Menubar } from "primeng/menubar";
import { MenuItem, PrimeIcons } from 'primeng/api';
import { DarkModeToggle } from '../../elements/dark-mode-toggle/dark-mode-toggle';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth.service';
import { AsyncPipe } from '@angular/common';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Menubar, DarkModeToggle, AsyncPipe, RouterLink, Divider],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  items: MenuItem[] | undefined;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    this.isLoggedIn$ = this.auth.isLoggedIn$
  }

  ngOnInit(): void {
    this.buildMenu();

    this.router.events.subscribe(() => this.buildMenu());
  }

  private buildMenu(): void {
    const url = this.router.url;

    this.items = [
      {
        label: 'Přehled',
        icon: PrimeIcons.TH_LARGE,
        routerLink: '/home',
        styleClass: url === '/home' ? 'active-nav-item' : '',
      },
      {
        label: 'Podle regionu',
        icon: PrimeIcons.MAP_MARKER,
        routerLink: '/region',
        styleClass: url === '/region' ? 'active-nav-item' : '',
      },
      {
        label: 'Podle oboru',
        icon: PrimeIcons.BOOK,
        routerLink: '/field',
        styleClass: url === '/field' ? 'active-nav-item' : '',
      },
    ];
  }
}