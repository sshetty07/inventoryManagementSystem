import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart.model';
import {CartService} from '../cart.service.service';

@Component({
  selector: 'app-cart-user',
  templateUrl: './cart-user.component.html',
  styleUrls: ['./cart-user.component.css']
})
export class CartUserComponent implements OnInit {
  @Input() cart?: Cart;
  @Input() index: number = 0;

  constructor(private cartService:CartService, private router : Router) { }

  ngOnInit(): void {
  }
  Onadduser() { 
    this.router.navigate(["/cart-add-user"]);
      
  }
  
}
