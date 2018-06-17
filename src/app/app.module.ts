import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { routing } from './app.routing';

import { ValidationHelper } from './helpers/validation-helper';

import { AuthGuard } from './guards/auth-guard';

import { WishlistService } from './services/wishlist-service';
import { AuthService } from './services/auth-service';
import { BookService } from './services/book-service';

import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/login/form/form.component';
import { PasswordFormComponent } from './components/login/password-form/password-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeComponent } from './components/home/home.component';
import { BookCardComponent } from './components/home/book-card/book-card.component';
import { BookInfoComponent } from './components/home/book-info/book-info.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishlistItemComponent } from './components/wishlist/wishlist-item/wishlist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    PasswordFormComponent,
    NavbarComponent,
    HomeComponent,
    BookCardComponent,
    BookInfoComponent,
    WishlistComponent,
    WishlistItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    ValidationHelper,
    BookService,
    WishlistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
