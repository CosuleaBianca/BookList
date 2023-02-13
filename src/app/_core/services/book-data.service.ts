import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  selectedBook: Book;
  constructor() {}
}
