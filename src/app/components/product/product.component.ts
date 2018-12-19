import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoproService } from '../../services/autopro.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
  //,styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any = {};

  constructor(private router:ActivatedRoute, _serviceData :AutoproService) {
    this.router.params.subscribe(params => {
      //this.product = this.getProducto(params['id']);
      this.product = _serviceData.getTestProduct(params['id']);
      console.log("Params:::",params['id']);
      console.log("Produc:::",this.product);
    });
  }

  ngOnInit() {
  }

}
