import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import {CartService} from '../cart.service.service';

@Component({
  selector: 'app-cart-add-user',
  templateUrl: './cart-add-user.component.html',
  styleUrls: ['./cart-add-user.component.css']
})
export class CartAddUserComponent implements OnInit {

  @Input() cart?: Cart;
  @Input() index: number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  onDelete()
{
  this.cartService.deletePost(this.index);
}
}
