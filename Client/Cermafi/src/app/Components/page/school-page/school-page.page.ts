import { Component } from '@angular/core';
import { SearchFieldComponent } from '../../elements/search-field/search-field.component';


@Component({
  selector: 'app-school-page',
  imports: [SearchFieldComponent],
  templateUrl: './school-page.page.html',
  styleUrl: './school-page.page.css'
})
export class SchoolPage {

  /* onstructor(
    private fieldService : FieldDataService
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
    console.log("User picked ID:", item.id);
  } */
}
