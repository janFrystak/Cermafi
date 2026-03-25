import { Component, input, output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchItem } from '../../../Models/element-items.interface';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [CommonModule, FormsModule, InputIconModule, IconFieldModule, InputTextModule],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.css'
})
export class SearchFieldComponent {
  items = input<SearchItem[]>([]); 
  placeholder = input<string>('Vyhledat...');
  itemSelected = output<SearchItem>();

  searchQuery = signal('');
  isDropdownVisible = signal(false);

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownVisible.set(false);
    }
  }

  topResults = computed(() => {
    const q = this.searchQuery().trim().toLowerCase();
    if (q.length < 2) return [];

    return this.items()
      .filter(item => {
        const h1Match = item.h1?.toLowerCase().includes(q);
        const h2Match = item.h2?.toLowerCase().includes(q);
        return h1Match || h2Match;
      })
      .slice(0, 6);
  });

  selectItem(item: SearchItem) {
    this.searchQuery.set(item.h1); 
    this.isDropdownVisible.set(false);
    this.itemSelected.emit(item); 
  }
}