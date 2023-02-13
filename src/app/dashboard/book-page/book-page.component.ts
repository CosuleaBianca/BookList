import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDataService } from '../../_core/services/book-data.service';
import { BooksService } from '../../_core/services/books.service';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent implements OnInit {
  bookName: string;
  bookAuthor: string;
  bookDescription: string;
  bookNumberOfPages: number;
  bookRating: number;

  form: UntypedFormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bookDataService: BookDataService,
    private booksService: BooksService,
    private fb: UntypedFormBuilder
  ) {
    // get id from the url and use it to receive game details
    this.getBookInfo(this.activatedRoute.snapshot.queryParams['bookId']);
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      numberOfPages: ['', [Validators.required]],
      rating: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  getBookInfo(id: number): void {
    this.booksService.getBookInfo(id).subscribe({
      next: (response) => {
        this.bookName = response.title;
        this.bookAuthor = response.author;
        this.bookDescription = response.description;
        this.bookNumberOfPages = response.numberOfPages;
        this.bookRating = response.rating;
      },
    });
  }

  editBook(): void {
    // we also need to send the id together with the updated information
    const bookInfo = {
      id: this.activatedRoute.snapshot.queryParams['bookId'],
      title: this.bookName,
      author: this.bookAuthor,
      description: this.bookDescription,
      numberOfPages: this.bookNumberOfPages,
      rating: this.bookRating,
    };
    this.booksService.updateBook(bookInfo).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
    });
  }

  deleteBook(): void {
    const bookId = this.activatedRoute.snapshot.queryParams['bookId'];
    this.booksService.deleteBook(bookId).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
    });
  }

  submitForm(): void {
    this.editBook();
  }

  confirmValidator = (
    control: UntypedFormControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    }
    return {};
  };
}
