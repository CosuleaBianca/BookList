import { Book } from 'src/app/_core/models/Book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly serverUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/books`);
  }

  getBookInfo(id: number): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/books/${id}`);
  }

  addBook(bookInfo: Book): Observable<any> {
    return this.httpClient.post(`${this.serverUrl}/books`, bookInfo);
  }

  updateBook(bookInfo: any): Observable<any> {
    return this.httpClient.put(
      `${this.serverUrl}/books/${bookInfo.id}`,
      bookInfo
    );
  }

  deleteBook(bookId: number): Observable<any> {
    return this.httpClient.delete(`${this.serverUrl}/books/${bookId}`);
  }
}
