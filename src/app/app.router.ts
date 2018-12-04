import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/log/login/login.component';
import { SigninComponent } from './components/log/signin/signin.component';


export const ROUTES: Routes = [
  { path: '', component: BodyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: '', pathMatch:'full', redirectTo: '' },
  { path: '**',  pathMatch:'full', redirectTo: '' }

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class FeatureRoutingModule {}
