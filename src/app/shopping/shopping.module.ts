import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonToggleModule } from '@angular/material/button-toggle'

import { ShoppingItemListComponent } from './shopping-item-list/shopping-item-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShoppingItemListComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatButtonToggleModule
  ]
})
export class ShoppingModule { }
