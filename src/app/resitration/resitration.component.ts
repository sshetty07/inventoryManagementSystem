import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resitration',
  templateUrl: './resitration.component.html',
  styleUrls: ['./resitration.component.css']
})
export class ResitrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}
    Login(){
      this.router.navigate(["/headeruser"]);
  }


}