import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { VolumeQuery } from '../models/entities';

@Injectable()
export class BookService{
    
  constructor(private http: HttpClient){
  }

  searchQuery: string;

  async searchBooks(query: string){
    return await this.http.get<VolumeQuery>(`https://www.googleapis.com/books/v1/volumes?q=${query}`).toPromise()
    .catch((ex) => {
      if (ex.status !== 200) {
        return null;
      }
    });
  }
}