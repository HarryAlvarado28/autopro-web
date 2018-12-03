import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';

import { TarjetaprodComponent } from './components/body/tarjetaprod/tarjetaprod.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';

import { ROUTES } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    TarjetaprodComponent,
    ProductComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
