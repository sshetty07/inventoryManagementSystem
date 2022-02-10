import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../cart.model';
import { CartService } from '../cart.service.service';

@Component({
  selector: 'app-cart-edit',
  templateUrl: './cart-edit.component.html',
  styleUrls: ['./cart-edit.component.css'],
})
export class CartEditComponent implements OnInit {
  form!: FormGroup;
  constructor(private cartService: CartService, private router : Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      image: new FormControl(null),
    });
  }
  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const image = this.form.value.image;

    const cart: Cart = new Cart(
      title,
      description,
      image,
      'test@test',
      new Date()
    );
    //calling cartservice
    this.cartService.addPosts(cart);

    //navigate to post list
    this.router.navigate(["/cart-list"]);
  }
}
