import { Component, OnInit} from '@angular/core';
import { Menubar } from "primeng/menubar";
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  imports: [Menubar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
    items: MenuItem[] | undefined;

    ngOnInit(): void {
      this.items = [
        {
          icon: PrimeIcons.HOME
        },
        { 
          label: "Podle regionu", 
          icon: PrimeIcons.MAP
        },
        {
          label: "Podle oboru",
          icon: PrimeIcons.HAMMER
        },
        
      ]
    }


}
