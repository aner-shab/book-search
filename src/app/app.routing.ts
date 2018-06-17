import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] }, 
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);