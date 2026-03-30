import { Component, OnInit, signal } from '@angular/core';
import { SearchFieldComponent } from '../../elements/search-field/search-field.component';
import { SearchItem } from '../../../Models/element-items.interface';
import { FieldDataService } from '../../../Services/field-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-field-page',
  imports: [SearchFieldComponent],
  templateUrl: './field-page.html',
  styleUrl: './field-page.css',
})
export class FieldPage implements OnInit {
  constructor(
    private fieldService: FieldDataService,
    private router: Router
  ) {}

  searchItems = signal<SearchItem[]>([]);

  ngOnInit() {
    this.fieldService.getData_Fields().subscribe(fields => {
      this.searchItems.set(fields.map(f => ({
        id: f.id,
        h1: f.name,
        h2: f.code
      })));
    });
  }

  handleSelection(item: SearchItem) {
    this.router.navigate(['/field', item.id]);
  }

  hint(text: string): void {
  const match = this.searchItems().find(i =>
    i.h1.toLowerCase().includes(text.toLowerCase()) ||
    i.h2?.toLowerCase().includes(text.toLowerCase())
  );
  if (match) this.router.navigate(['/field', match.id]);
}
}