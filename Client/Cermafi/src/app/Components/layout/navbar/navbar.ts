import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Menubar } from "primeng/menubar";
import { MenuItem, PrimeIcons } from 'primeng/api';
import { DarkModeToggle } from '../../elements/dark-mode-toggle/dark-mode-toggle';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth.service';
import { AsyncPipe } from '@angular/common';
import { Menu } from 'primeng/menu'




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Menubar, DarkModeToggle, AsyncPipe, Menu, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  items: MenuItem[] | undefined;
  adminItems: MenuItem[] | undefined;
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
        label: 'Kraje',
        icon: PrimeIcons.MAP_MARKER,
        routerLink: '/region',
        styleClass: url === '/region' ? 'active-nav-item' : '',
      },
      {
        label: 'Obory',
        icon: PrimeIcons.BOOK,
        routerLink: '/field',
        styleClass: url === '/field' ? 'active-nav-item' : '',
      },
      /* {
        label: 'Školy',
        icon: PrimeIcons.BOOK,
        routerLink :'/school',
        styleClass: url === '/field' ? 'active-nav-item' : '',

      }     */
    ];
    this.adminItems = [
      {
        label: 'Upload dat',
        icon: 'pi pi-upload',
        routerLink: '/admin/upload'
      },
      {
        separator: true
      },
      {
        label: 'Odhlásit se',
        icon: 'pi pi-sign-out',
        command: () => {
          this.auth.logout().subscribe(() => {
            this.router.navigate(['/home']);
          });
        }
      },
      ...(this.auth.isRoot()) ? [
        {
        separator: true
      }, 
      {
        label: 'Správa účtů',
        icon: 'pi pi-users',
        routerLink: 'admin/accounts'
      }
      ] : []
      
];
  }
}