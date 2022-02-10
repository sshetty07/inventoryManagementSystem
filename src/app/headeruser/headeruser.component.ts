import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headeruser',
  templateUrl: './headeruser.component.html',
  styleUrls: ['./headeruser.component.css']
})
export class HeaderuserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Registration(){

    this.router.navigate(["/resitration"]);
  
  
  }

}
