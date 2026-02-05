import { Component } from '@angular/core';
import { ToggleButtonModule } from "primeng/togglebutton"
import { PrimeIcons } from 'primeng/api';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [ToggleButtonModule, FormsModule],
  templateUrl: './dark-mode-toggle.html',
  styleUrl: './dark-mode-toggle.css',
  
    
})
export class DarkModeToggle {
  isDark = false;
  toggleDark(){
    const element = document.querySelector('html');
    
    if (element) {
      element.classList.toggle('p-dark');
      this.isDark = !this.isDark
    } 
  }
}
