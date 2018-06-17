import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/entities';
import { trigger, style, animate, transition } from '@angular/animations';
import { WishlistService } from 'src/app/services/wishlist-service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  animations: [
    trigger(
      'fade-in', [
        transition(':enter', [
          style({transition: 'opacity ease-in', opacity: 0}),
          animate('200ms', style({transition: 'opacity ease-in', opacity: 1}))
        ]),
        transition(':leave', [
          style({transition: 'opacity ease-in', opacity: 1}),
          animate('200ms', style({transition: 'opacity ease-in', opacity: 0}))
        ])
      ]
    )
  ]
})
export class WishlistComponent implements OnInit {

  wishlist: Book[];
  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
    this.wishlist = [];
    this.wishlist = this.wishlistService.get();
  }

}
