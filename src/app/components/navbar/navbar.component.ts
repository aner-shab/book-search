import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/services/wishlist-service';
import { CONST } from 'src/app/models/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: string;

  constructor(private authService: AuthService, private router: Router, private wishlist: WishlistService) { }

  ngOnInit() {
  }

  isActiveRoute(route: string) {
    if (this.router.url === route){    
      return true;
    } 
    return false;
  }

  onWishlistClicked(){
    this.router.navigate([CONST.ROUTES.WISHLIST]);
  }
  onUserClicked(){
    this.router.navigate([CONST.ROUTES.HOME]);
  }
}
