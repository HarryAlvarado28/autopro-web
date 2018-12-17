import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoproService {
  // Conexión al WebServer al Servidor IP y Puerto:
  ip = '192.168.0.10';
  port = '3000';
//https://heroesapp-91841.firebaseio.com/heroes/-LSKpTypO0qgIyDwv-yQ
  constructor(private http:HttpClient) {
    console.log('Autopro API Connect...');
    //this.getProduct();
  }

  getQuery(query: string){
    // example: query = 'product?op=1'
    const url = `http://${this.ip}:${this.port}/${query}`;
    console.log(url);
    return this.http.get<any>(url,{responseType: 'json'});
  }

  getProduct(){
    return this.getQuery('prod')
      .pipe(
        map(
          data => {
            console.log("Supoer data: ",data);
            return data;
          }
        )
      );
  }
}
