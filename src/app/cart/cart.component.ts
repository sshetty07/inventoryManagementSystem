import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import {CartService} from '../cart.service.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart?: Cart;
  @Input() index: number = 0;
  
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    console.log(this.cart);
  }
  onDelete() {
    
    this.cartService.deletePost(this.index);
  }
}
