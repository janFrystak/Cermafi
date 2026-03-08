import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menubar } from "primeng/menubar";
import { MenuItem, PrimeIcons } from 'primeng/api';
import { DarkModeToggle } from '../../elements/dark-mode-toggle/dark-mode-toggle';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, DarkModeToggle],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

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