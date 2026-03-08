import { Component, input, output, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Select } from 'primeng/select';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule, Select],
  template: `
    <p-select 
      [options]="values() || []" 
      [(ngModel)]="selectedValue" 
      (onChange)="onValueSelect($event)"
      [placeholder]="placeholder()"
      styleClass="year-dropdown">
    </p-select>
  `,
  styleUrl: './dropdown.component.css'
})

/* cheetsheet
[htmlProperty] = myValue    -property binding - one-way handshake
(event) = function          -event binding    - on triggered event, trigger function 
[(ngModel)] = myValue       -two-way data bidning - two-way handshake

. */
export class DropdownComponent {
  placeholder = input<string>();
  values = input<number[] | null>();
  selectedValue = model<number | null>();
  valueChanged = output<number | null>();

  onValueSelect(event: any) {
    this.valueChanged.emit(event.value);
  }
}