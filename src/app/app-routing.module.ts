import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (module) => module.DashboardModule
      ),
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
