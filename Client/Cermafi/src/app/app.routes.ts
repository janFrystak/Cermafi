import { Routes } from '@angular/router';
import { HomePage } from './Components/page/home-page/home-page';
import { FieldPage } from './Components/page/field-page/field-page';
import { RegionPage } from './Components/page/region-page/region-page';
import { SingleRegionPage } from './Components/page/single-region-page/single-region-page';
import { AdminImportPage} from './Components/page/admin-import-page/admin-import-page.component';
import { authGuard } from './auth.guard';
import { LoginPage } from './Components/page/login-page/login-page.component';


export const routes: Routes = [
    //{path: '', component: HomeComponent },    
    {path: 'home', component: HomePage},
    {path: 'region', component: RegionPage},
    {path: 'field', component: FieldPage },
    {path: 'region/:id', component: SingleRegionPage},
    { path: 'region/:id/:year', component: SingleRegionPage },
    {path: 'admin/import', component: AdminImportPage, canActivate: [authGuard]},
    {path: 'admin', component: LoginPage },
    {path: '', redirectTo:'home', pathMatch: 'full'},
   
   
    
];
