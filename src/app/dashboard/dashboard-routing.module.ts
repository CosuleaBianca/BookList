import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { AddBookPageComponent } from './add-book-page/add-book-page.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent },
  {
    path: 'book-page',
    component: BookPageComponent,
  },
  {
    path: 'add-book-page',
    component: AddBookPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
