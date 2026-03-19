import { Routes } from '@angular/router';
import { HomePage } from './Components/page/home-page/home-page';
import { FieldPage } from './Components/page/field-page/field-page';
import { RegionPage } from './Components/page/region-page/region-page';
import { SingleRegionPage } from './Components/page/single-region-page/single-region-page';
import { AdminImportPage} from './Components/page/admin-import-page/admin-import-page.component';
import { AuthGuard } from './auth.guard';
import { LoginPage } from './Components/page/login-page/login-page';
import { SingleFieldPage } from './Components/page/single-field-page/single-field-page.page';
import { AdminDashboardPage } from './Components/page/admin-dashboard/admin-dashboard.page';
import { SchoolPage } from './Components/page/school-page/school-page.page';


export const routes: Routes = [
    //{path: '', component: HomeComponent },    
    {path: 'home', component: HomePage},
    {path: 'region', component: RegionPage},
    {path: 'field', component: FieldPage },
    {path: 'school', component: SchoolPage},
    {path: 'field/:id', component: SingleFieldPage},
    {path: 'region/:id', component: SingleRegionPage},
    {path: 'region/:id/:year', component: SingleRegionPage },
    {path: 'admin/upload', component: AdminImportPage, canActivate: [AuthGuard]},
    {path: 'admin/accounts', component: AdminDashboardPage, canActivate: [AuthGuard]},
    {path: 'admin/login', component: LoginPage },
    {path: '', redirectTo:'home', pathMatch: 'full'},
   
   
    
];
