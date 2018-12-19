import { Component, OnInit } from '@angular/core';
import { AutoproService } from '../../services/autopro.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
  //,styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  newProducts: any[] = [];
  items: any;

  test = {
    name:"nombre largo y normal",
    short_name:"nombrecorto"
  };

  constructor(private _serviceData :AutoproService) {
    // console.log(this.test.name);
    // this.items = {
    //   id: 5,
    //   name: "normal",
    //   short_name: "nombrecorto"
    // };

    this._serviceData.getProduct().subscribe((data: any) => {
      console.log(data);
      //this.newProducts = data;
    });
    this.newProducts = _serviceData.getTestProducts();
    console.log('Log1- in constructor: ', this.newProducts);
  }

  ngOnInit() {

  }

}

interface EnumServiceItem {
    id: number;
    short_description: string;
    name: string;
    description: string;
    urlimg: string
}

//interface EnumServiceItems extends Array<EnumServiceItem>{}
