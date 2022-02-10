import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import {CartService} from '../cart.service.service'

@Component({
  selector: 'app-cart-list-user',
  templateUrl: './cart-list-user.component.html',
  styleUrls: ['./cart-list-user.component.css']
})
export class CartListUserComponent implements OnInit {
  @Input() cart?:Cart;
  listOfCart: Cart[] = [ ];
  constructor(private cartService: CartService)  {}

  ngOnInit(): void {
    this.listOfCart = this.cartService.getPosts();
  }

}

