import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/entities';
import { WishlistService } from 'src/app/services/wishlist-service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  @Output() moreInfo = new EventEmitter<Book>();

  constructor(private wishlist: WishlistService){ }

  ngOnInit() {
  }

  onInfoClicked(){
    this.moreInfo.emit(this.book);
  }

  onWishlistClicked(){
    if (this.book.isFavorite){
      this.removeFromWishlist();
    }
    else{
      this.addToWishlist();
    }
  }

  addToWishlist(){
      this.wishlist.add(this.book);
      this.book.isFavorite = true;
  }

  removeFromWishlist(){
      this.wishlist.remove(this.book);
      this.book.isFavorite = false;
  }

  
}
