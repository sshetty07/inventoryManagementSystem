import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import {CartService} from '../cart.service.service'

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  @Input() cart?:Cart;
  
  listOfCart: Cart[] = [  ];


  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listOfCart = this.cartService.getPosts();
  }
}
