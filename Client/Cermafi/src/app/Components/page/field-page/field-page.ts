import { Component, signal } from '@angular/core';
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
export class FieldPage {
  constructor(
    private fieldService : FieldDataService,
    private router: Router
  ){}
  
  searchItems = signal<SearchItem[]>([]);

  ngOnInit() {
    this.fieldService.getData_Fields().subscribe(fields => {
      const mapped = fields.map(f => ({
        id: f.id,      
        h1: f.name,   
        h2: f.code     
      }));
      this.searchItems.set(mapped);
    });
  }

  handleSelection(item: SearchItem) {
    this.router.navigate(['/field', item.id]);  
  }
  
}
