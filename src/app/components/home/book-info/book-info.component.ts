import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/entities';
import { WishlistService } from 'src/app/services/wishlist-service';
import { CONST } from 'src/app/models/constants';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})

export class BookInfoComponent implements OnInit{

  @Input() book: Book;
  @Output() close = new EventEmitter<boolean>();
  
  caption: string;
  
  constructor(private wishlist: WishlistService){ }

  ngOnInit() {
    this.caption = CONST.ADD_TO_WISHLIST;
    if (this.book.isFavorite) {
      this.caption = CONST.REMOVE_FROM_WISHLIST;
    }
  }


  onClicked(e) {
    this.close.emit(true);
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
      this.caption = CONST.REMOVE_FROM_WISHLIST;
  }

  removeFromWishlist(){
      this.wishlist.remove(this.book);
      this.book.isFavorite = false;
      this.caption = CONST.ADD_TO_WISHLIST;
  }
  
}
