import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
form!:FormGroup;
name: String = "";
  password1: any = "";
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(10)] ),
      

    });
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
