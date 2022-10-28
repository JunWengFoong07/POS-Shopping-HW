import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/ui/layout/layout.component';

const routes: Routes = [
  {
    path: 'shopping',
    component: LayoutComponent,
    loadChildren: () => import('./shopping/shopping.module').then((m) => m.ShoppingModule)
  },
  {
    path: '**',
    redirectTo: 'shopping'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
