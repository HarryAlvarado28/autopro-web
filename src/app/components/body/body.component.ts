import { Component, OnInit } from '@angular/core';
import { AutoproService } from '../../services/autopro.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  newProducts: any[] = [];
  items: any;

  test = {
    name:"nombre largo y normal",
    short_name:"nombrecorto"
  };

  constructor(private aservice :AutoproService) {
    // console.log(this.test.name);
    // this.items = {
    //   id: 5,
    //   name: "normal",
    //   short_name: "nombrecorto"
    // };

    this.aservice.getProduct().subscribe((data: any) => {
      console.log(data);
      //this.newProducts = data;
    });
    console.log('Log1- in constructor: ', this.newProducts);
  }

  ngOnInit() {

    var result: EnumServiceItem[] = [
      { id: 0, name: 'CId', key: 'contentId' },
      { id: 1, name: 'Modified By', key: 'modifiedBy' },
      { id: 2, name: 'Modified Date', key: 'modified' },
      { id: 3, name: 'Status', key: 'contentStatusId' },
      { id: 4, name: 'Status > Type', key: ['contentStatusId', 'contentTypeId'] },
      { id: 5, name: 'Title', key: 'title' },
      { id: 6, name: 'Type', key: 'contentTypeId' },
      { id: 7, name: 'Type > Status', key: ['contentTypeId', 'contentStatusId'] }
    ];
    //this.newProducts = result;

    console.log('Log2- in OnInit: ', this.newProducts);

  }

}

interface EnumServiceItem {
    id: number; name: string; key: any
}

interface EnumServiceItems extends Array<EnumServiceItem>{}
