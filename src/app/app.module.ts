import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CartComponent } from './cart/cart.component';
import { CartEditComponent } from './cart-edit/cart-edit.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderuserComponent } from './headeruser/headeruser.component';
import { CartListUserComponent } from './cart-list-user/cart-list-user.component';
import { CartAddUserComponent } from './cart-add-user/cart-add-user.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { CartUserComponent } from './cart-user/cart-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FrontPageComponent } from './front-page/front-page.component';
import { FormsModule } from '@angular/forms';
import { ResitrationComponent } from './resitration/resitration.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/front-page',
    pathMatch: 'full',
  },
  {
    path: 'cart-list',
    component: CartListComponent,
  },
  {
    path: 'front-page',
    component: FrontPageComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'resitration',
    component: ResitrationComponent,
  },
  {
    path: 'cart-edit',
    component: CartEditComponent,
  },
  {
    path: 'cart-list-user',
    component: CartListUserComponent,
  },
  {
    path: 'cart-add-user',
    component: CartAddUserComponent,
  },
  {
    path: 'headeruser',
    component: HeaderuserComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartEditComponent,
    CartListComponent,
    HeaderComponent,
    AuthComponent,
    HeaderuserComponent,
    CartListUserComponent,
    CartAddUserComponent,
    AuthUserComponent,
    CartUserComponent,
    FrontPageComponent,
    
    ResitrationComponent
    
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
