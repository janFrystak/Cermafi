import { Component, input, output, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-year-dropdown',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  template: `
    <p-dropdown 
      [options]="years()" 
      [(ngModel)]="selectedYear" 
      (onChange)="onYearSelect($event)"
      placeholder="Vyberte rok"
      styleClass="year-dropdown">
    </p-dropdown>
  `,
  styleUrl: './dropdown.component.css'
})
export class YearDropdownComponent {
  
  years = input<number[] | any[]>();
  
  selectedYear = model<number | null>();
  
  yearChanged = output<number>();

  onYearSelect(event: any) {
    this.yearChanged.emit(event.value);
  }
}