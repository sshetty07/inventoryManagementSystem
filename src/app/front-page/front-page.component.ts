import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart.model';
import { CartService } from '../cart.service.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  name: String = "";
  password1: any = "";

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }
  Login() {
    this.router.navigate(["/front-page"]);
    if (this.name == "Supriya" && this.password1 == "1234") {
      this.router.navigate(["/header"]);
    }
    else if (this.name == "Vaarini" && this.password1 == "1234") {
      this.router.navigate(["/headeruser"]);
    }

  
  else {
  alert("Wrong User");
  this.router.navigate(["/front-page"]);

}

  }
  Registration(){

    this.router.navigate(["/resitration"]);
  
  
  }
  
}


