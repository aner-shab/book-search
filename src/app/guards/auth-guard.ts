import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ROUTES } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { CONST } from '../models/constants';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string){
       
        if (sessionStorage.getItem(CONST.SESSION_STORAGE)) {
            return true;
        }
 
        this.authService.redirectUrl = url;
        this.router.navigate([CONST.ROUTES.LOGIN]);
        return false;
    }
}