import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingItemListComponent } from './shopping-item-list/shopping-item-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingItemListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
