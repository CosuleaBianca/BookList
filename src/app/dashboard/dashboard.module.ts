import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRateModule } from 'ng-zorro-antd/rate';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BookCardComponent } from './book-card/book-card.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BookPageComponent } from './book-page/book-page.component';
import { AddBookPageComponent } from './add-book-page/add-book-page.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    DashboardPageComponent,
    BookCardComponent,
    BookPageComponent,
    AddBookPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzRateModule,
    NzRadioModule,
    NzIconModule,
  ],
})
export class DashboardModule {}
