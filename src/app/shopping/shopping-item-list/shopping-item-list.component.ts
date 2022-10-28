import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject, Subscription, takeUntil, tap } from 'rxjs';
import { ShoppingItem } from 'src/app/shared/model/shopping-item.model';
import { DataService } from 'src/app/shared/service/data.service';
import { ShoppingItemDialogComponent } from 'src/app/shared/ui/shopping-item-dialog/shopping-item-dialog.component';

@Component({
  selector: 'app-shopping-item-list',
  templateUrl: './shopping-item-list.component.html',
  styleUrls: ['./shopping-item-list.component.scss']
})
export class ShoppingItemListComponent implements OnInit {

  itemList$?: BehaviorSubject<ShoppingItem[]>

  constructor(
    private dataService: DataService,
    private dialogService: MatDialog
  ) { }

  ngOnInit(): void {
    this.itemList$ = this.dataService.getShoppingBehaviorItem()
  }

  open(item: ShoppingItem) {
    this.dialogService.open(ShoppingItemDialogComponent, { data: item })
  }

}
