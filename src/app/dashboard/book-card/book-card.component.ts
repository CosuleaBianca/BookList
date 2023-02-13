import { Book } from './../../_core/models/Book';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  @Output() clickedMore = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  navigateToBookPage() {
    this.clickedMore.emit();
  }
}
