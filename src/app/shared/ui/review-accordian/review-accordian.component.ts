import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingItemReview } from '../../model/shopping-item.model';

import { MatExpansionModule } from '@angular/material/expansion'
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'shared-ui-review-accordian',
  standalone: true,
  imports: [ CommonModule, MatExpansionModule, MatCardModule, MatIconModule ],
  templateUrl: './review-accordian.component.html',
  styleUrls: ['./review-accordian.component.scss']
})
export class ReviewAccordianComponent {

  @Input() data?: ShoppingItemReview[]

  constructor() { }

}
