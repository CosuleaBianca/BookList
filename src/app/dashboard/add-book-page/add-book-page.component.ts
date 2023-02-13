import { Book } from 'src/app/_core/models/Book';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/_core/services/books.service';

@Component({
  selector: 'add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.scss'],
})
export class AddBookPageComponent implements OnInit {
  bookList: Book[] = [];
  bookName: string;
  bookAuthor: string;
  bookDescription: string;
  bookNumberOfPages: number;
  bookRating: number;
  form: UntypedFormGroup;

  constructor(
    private router: Router,
    private booksService: BooksService,
    private fb: UntypedFormBuilder
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      numberOfPages: ['', [Validators.required]],
      rating: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((res) => {
      this.bookList = res;
    });
  }

  addNewBook(): void {
    const bookInfo = {
      title: this.form.value.title,
      author: this.form.value.author,
      description: this.form.value.description,
      numberOfPages: this.form.value.numberOfPages,
      rating: this.form.value.rating,
    };
    this.booksService.addBook(bookInfo).subscribe((response) => {
      this.bookList.push(response);
      this.router.navigate(['/dashboard']);
    });
  }

  submitForm(): void {
    this.addNewBook();
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.form.reset();
    for (const key in this.form.controls) {
      if (this.form.controls.hasOwnProperty(key)) {
        this.form.controls[key].markAsPristine();
        this.form.controls[key].updateValueAndValidity();
      }
    }
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
