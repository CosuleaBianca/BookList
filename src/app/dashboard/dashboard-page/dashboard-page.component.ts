import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/_core/models/Book';
import { BookDataService } from 'src/app/_core/services/book-data.service';
import { BooksService } from 'src/app/_core/services/books.service';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  bookList: Book[] = [];
  bookName: string;
  bookAuthor: string;
  bookDescription: string;
  bookNumberOfPages: number;
  bookRating: number;
  searchName: string = '';
  filteredBookList: Book[] = [];
  radioValue: any;

  constructor(
    private booksService: BooksService,
    private router: Router,
    private bookDataService: BookDataService
  ) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((response) => {
      this.bookList = response;
      this.filteredBookList = this.bookList;
    });
  }

  navigateToBookPage(bookInfo: any): void {
    this.bookDataService.selectedBook = bookInfo;
    this.router.navigate(['/dashboard/book-page'], {
      queryParams: { bookId: bookInfo.id },
    });
  }

  navigateToAddBookPage(): void {
    this.router.navigate(['/dashboard/add-book-page']);
  }

  searchByName() {
    if (this.searchName == '') this.filteredBookList = this.bookList;
    else
      this.filteredBookList = this.filteredBookList.filter((book: Book) =>
        book.title.toLowerCase().includes(this.searchName.toLowerCase())
      );
  }

  sortBooks() {
    this.filteredBookList = this.filteredBookList.sort((a: Book, b: Book) => {
      if (this.radioValue === 'A') {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
      } else if (this.radioValue === 'B') {
        if (a.author < b.author) {
          return -1;
        }
        if (a.author > b.author) {
          return 1;
        }
      } else if (this.radioValue === 'C') {
        if (a.numberOfPages < b.numberOfPages) {
          return -1;
        }
        if (a.numberOfPages > b.numberOfPages) {
          return 1;
        }
      } else if (this.radioValue === 'D') {
        if (a.rating < b.rating) {
          return -1;
        }
        if (a.rating > b.rating) {
          return 1;
        }
      }
      return 0;
    });
  }

  @HostListener('window:unload') unloadHandler() {
    if (!window.localStorage['rememberMe'])
      window.localStorage.removeItem('token');
  }

  logout(): void {
    window.localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
