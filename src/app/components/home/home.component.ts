import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book-service';
import { VolumeQuery, Volume, Book } from 'src/app/models/entities';
import { trigger, style, animate, transition } from '@angular/animations';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as _ from "lodash";
import { WishlistService } from 'src/app/services/wishlist-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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

export class HomeComponent implements OnInit {
  
  filterQuery = "";

  library: Book[];
  filteredLibrary: Book[];

  selectedBook: Book;
  infoPopup: boolean; // flag for modal

  private searchKeyUp: Subject<string> = new Subject();
  // private filterKeyUp: Subject<string> = new Subject(); // Todo
  
  constructor(private bookService: BookService, private wishlistService: WishlistService) { 
    
  }
 
  ngOnInit() {
    this.library = [];
    this.infoPopup = false;

    this.searchKeyUp.pipe(debounceTime(250)).subscribe(value => {
      this.search();
    });
  
  }

  onSearchKeyUp(e){ 
    this.searchKeyUp.next(e);
  }
  
  onFilterKeyUp(e){ 
    this.filterResults(this.filterQuery);
  }

  onDetailsClicked(e: Book){
    this.selectedBook = e;
    this.infoPopup = true;
  }

  onDetailsClosed(e){
    this.selectedBook = null;
    this.infoPopup = false; 
  }

  search(){
    if (this.bookService.searchQuery && this.bookService.searchQuery.length > 1){
      this.bookService.searchBooks(this.bookService.searchQuery).then((result: VolumeQuery) => {
        if (result) {
          this.library = [];


          _.forEach(result.items, (item: Volume) => {

            // concat authors
            let author = item.volumeInfo.authors ? item.volumeInfo.authors[0] : "";
            if (item.volumeInfo.authors && item.volumeInfo.authors.length > 1){
              author = item.volumeInfo.authors.join(' and ');
            }

            console.log(result.items[0]);
            // push to viewed collection
            this.library.push({
                  title: item.volumeInfo.title,
                  author: author,
                  thumbnail: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : null,
                  description: item.volumeInfo.description ? item.volumeInfo.description : " ",
                  date: item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate.toString() : " ",
                  id: item.id,
                  isFavorite: this.wishlistService.exists(item.id) ? true : false
                });
          });
        }
      });
      
      this.filterResults(this.filterQuery);
    }
  }

  filterResults(query){
    
  }

}
