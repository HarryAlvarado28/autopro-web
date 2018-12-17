import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';

import { TarjetaprodComponent } from './components/body/tarjetaprod/tarjetaprod.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';

import { ROUTES } from './app.router';
import { LoginComponent } from './components/log/login/login.component';
import { SigninComponent } from './components/log/signin/signin.component';

import { AutoproService } from './services/autopro.service';
import { TrakingComponent } from './components/traking/traking.component';
import { InvetoryComponent } from './components/invetory/invetory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    TarjetaprodComponent,
    ProductComponent,
    AboutComponent,
    LoginComponent,
    SigninComponent,
    TrakingComponent,
    InvetoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
    AutoproService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
