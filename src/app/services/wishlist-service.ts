import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from '../models/entities';
import * as _ from 'lodash';

@Injectable()
export class WishlistService{


    private wishlist: Book[];

    constructor(){
        this.wishlist = [];
    }


    add(book: Book){
        this.wishlist.push(book);
    }

    remove(book: Book){
        _.remove(this.wishlist, ((i) => {
            return i === book;
        }));
    }

    count(){
        return this.wishlist.length;
    }

    exists(bookId: string) {
        return _.find(this.wishlist, (i) => {
            return i.id === bookId;
        });
    }

    get(){
        return this.wishlist;
    }

}
    