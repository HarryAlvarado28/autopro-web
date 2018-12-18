import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetaprod',
  templateUrl: './tarjetaprod.component.html'
  //,styleUrls: ['./tarjetaprod.component.css']
})
export class TarjetaprodComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verProduct(item: any){
    console.log(item);
    let product;
    product = item.id;

    // if(item.type === 'name'){
    //   product = item.id;
    // }else{
    //   product = item.id;
    // }
    console.log('product:::: ',product);
    this.router.navigate(['/product',product]);
  }

  comprar(item: any){
    console.log('Comprar: ',item);
  }

}
