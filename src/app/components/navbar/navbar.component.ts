import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
    console.log("nav:::",this.router.pathFromRoot);
    var object = this.router.pathFromRoot['0'];
    console.log("navRUTa:::",object['_routerState']);
  }

  ngOnInit() {
  }

  session(){
    return true;
  }
}
