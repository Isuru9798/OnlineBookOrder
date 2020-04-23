import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TrendingCategoriesComponent } from './home/trending-categories/trending-categories.component';
import { LatesBooksComponent } from './home/lates-books/lates-books.component';
import { ShopComponent } from './shop/shop.component';
import { FeaturedcategoriesComponent } from './shop/featuredcategories/featuredcategories.component';
import { CategoriesComponent } from './shop/categories/categories.component';
import { FeaturedBooksComponent } from './shop/featured-books/featured-books.component';
import { BooksComponent } from './shop/books/books.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TrendingCategoriesComponent,
    LatesBooksComponent,
    ShopComponent,
    FeaturedcategoriesComponent,
    CategoriesComponent,
    FeaturedBooksComponent,
    BooksComponent,
    BookComponent,
    CartComponent,
    ShippingComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
