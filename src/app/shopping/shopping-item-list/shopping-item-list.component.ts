import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject, Subscription, takeUntil, tap } from 'rxjs';
import {
  CategoryEnum,
  ShoppingItem,
} from 'src/app/shared/model/shopping-item.model';
import { DataService } from 'src/app/shared/service/data.service';
import { ShoppingItemDialogComponent } from 'src/app/shared/ui/shopping-item-dialog/shopping-item-dialog.component';

@Component({
  selector: 'app-shopping-item-list',
  templateUrl: './shopping-item-list.component.html',
  styleUrls: ['./shopping-item-list.component.scss'],
})
export class ShoppingItemListComponent implements OnInit {
  itemList$!: BehaviorSubject<ShoppingItem[]>;
  originalList$ = new BehaviorSubject<ShoppingItem[]>([]);
  searchInput = '';
  categoryFilter?: CategoryEnum;

  constructor(
    private dataService: DataService,
    private dialogService: MatDialog
  ) {}

  ngOnInit(): void {
    this.itemList$ = this.dataService.getShoppingBehaviorItem();
    this.originalList$.next(this.itemList$.value);
  }

  // open a dialog / modal for the product
  open(item: ShoppingItem) {
    this.dialogService.open(ShoppingItemDialogComponent, { data: item });
  }

  // angular material button toggle does not allow deselect
  // if it not multiple so will have to use this way to deselect frist selection and select second selection
  toggleHandle(event: any) {
    let toggle = event.source;
    if (toggle) {
      let group = toggle.buttonToggleGroup;
      if (event.value.some((item: any) => item == toggle.value)) {
        group.value = [toggle.value];
      }
      this.filterByCategory(Number(toggle.value));
    }
  }

  // filter item by category
  filterByCategory(category: CategoryEnum) {
    if (category !== this.categoryFilter) {
      const list = this.itemList$?.value.filter(
        (item) => item.category === category
      );
      this.itemList$.next(list);
      this.categoryFilter = category
    } else {
      this.itemList$.next(this.originalList$.value)
      this.categoryFilter = 0
    }
  }

  // search item by name
  search(search: string) {
    if (search !== '') {
      const list = this.itemList$?.value.filter(
        (item) => item.name.toUpperCase().match(search.toUpperCase())
      );
      this.itemList$.next(list);
    } else {
      this.itemList$.next(this.originalList$.value)
    }
  }
}
