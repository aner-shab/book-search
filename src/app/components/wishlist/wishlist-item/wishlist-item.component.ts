import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/entities';
import { WishlistService } from 'src/app/services/wishlist-service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss']
})
export class WishlistItemComponent implements OnInit {

  @Input() book: Book;
  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
  }

  onRemoveClicked(){
    this.wishlistService.remove(this.book);
  }

}
