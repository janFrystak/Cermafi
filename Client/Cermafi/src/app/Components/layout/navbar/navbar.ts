import { Component, OnInit} from '@angular/core';
import { Menubar } from "primeng/menubar";
import { MenuItem, PrimeIcons } from 'primeng/api';
import { DarkModeToggle } from '../../elements/dark-mode-toggle/dark-mode-toggle';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, DarkModeToggle],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
    items: MenuItem[] | undefined;

    ngOnInit(): void {
      this.items = [
        {
          icon: PrimeIcons.HOME,
          routerLink: '/home',
        },
        { 
          label: "Podle regionu", 
          icon: PrimeIcons.MAP,
          routerLink: '/region',
        },
        {
          label: "Podle oboru",
          icon: PrimeIcons.HAMMER,
          routerLink: '/field'
        },
        
      ]
    }


}
