import { Routes } from '@angular/router';
import { HomePage } from './Components/page/home-page/home-page';
import { FieldPage } from './Components/page/field-page/field-page';
import { RegionPage } from './Components/page/region-page/region-page';
import { SingleRegionPage } from './Components/page/single-region-page/single-region-page';


export const routes: Routes = [
    //{path: '', component: HomeComponent },    
    {path: 'home', component: HomePage},
    {path: 'region', component: RegionPage},
    {path: 'field', component: FieldPage },
    {path: 'region/:id', component: SingleRegionPage},
    {path: '', redirectTo:'home', pathMatch: 'full'},
    /* {path: '**', redirectTo: 'home'}, */
   
    
];
