import { Component, OnInit } from '@angular/core';
import { AutoproService } from '../../services/autopro.service';

@Component({
  selector: 'app-invetory',
  templateUrl: './invetory.component.html'
  //,styleUrls: ['./invetory.component.css']
})
export class InvetoryComponent implements OnInit {

  bodegas:any;
  garantias:any;

  constructor(private _servideData: AutoproService) {

    this.bodegas = _servideData.getTestBodega();
    this.garantias = _servideData.getTestGarantia();

  }

  ngOnInit() {
  }

}
