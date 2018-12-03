import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any = {};

  constructor(private router:ActivatedRoute) {
    this.router.params.subscribe(params => {
      console.log(params['id']);
    });
  }

  ngOnInit() {
  }

}
