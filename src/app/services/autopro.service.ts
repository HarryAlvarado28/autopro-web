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

  //----- TESTING AREA DATA OFFLINE ----------------------

  getTestProduct(id :number){
    console.log(this._resProduct);
    for (let i = 0; i < this._resProduct.length; i++) {
      console.log("-.-.-.-.-.-.",this._resProduct.map[0]);
      if (id == this._resProduct['id']) {
        return this._resProduct[i];
      }
    }
    return null;
  }

  getTestProducts(){
    return this._resProduct;
  }

  getTestGarantia(){
    return this._resGarantia;
  }

  getTestProvider(){
    return this._resProvider;
  }

  getTestBodega(){
    return this._resBodega;
  }

  private _resProduct = [
        {
        id: 0,
            name: 'Avante Llantas Toyota',
            short_description: 'LLANTA TOYO OPEN COUNTRY A/T2 104T 235/70R16 Avante Llantas y Rines Oficial',
            description: "Este neumático versátil todo terreno ofrece una excelente tracción y la banda de rodamiento junto con una banda de rodamiento abiertamente agresivo y marcha silenciosa. El Open Country A T II está respaldado por una garantía de desgaste de hasta 65.",
            urlimg: "https://grupoavante.org/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/t/o/toyo_open_country_at2_wo_11.jpg"
        },
        {
            id: 1,
            name: 'Aceite Mobil 1™ 5W-30',
            short_description: 'Avanzado aceite de motor totalmente sintético',
            description: "Mobil 1™ 5W-30 es un avanzado aceite de motor totalmente sintético diseñado para mantener a su motor funcionando como nuevo al proporcionar una excepcional protección contra el desgaste, poder de limpieza y un buen rendimiento en general.",
            // urlimg: "http://a0.cdnfan.com/images/M/9/3/7/0/que-aceite-usa-mi-coche_hd_63656.jpg" },
            urlimg: "https://super.walmart.com.mx/images/product-images/img_large/00750301936100L.jpg"
        },
        {
            id: 2,
            name: 'Turtle Wax',
            short_description: 'Turtle Wax, SOLUCIÓN DE UN SOLO PASO PARA ELIMINAR LA OXIDACIÓN DE LA LUZ Y EL COLOR AMARILLENTO DE SUS FAROS Y LUCES TRASERAS.',
            description: "Los compuestos de precisión se restauran a una condición nueva, al tiempo que mejoran la claridad general. Elimina la oxidación de la luz y el amarilleo. Las resinas acrílicas de OEM especializadas previenen el amarilleo futuro y protegen contra la oxidación",
            urlimg: "https://www.doriandrake.com/wp-content/uploads/2014/02/original-wax.png"
        },
        {
            id: 3,
            name: 'La bujías Bosch Platinum+4',
            short_description: 'La bujías Bosch Platinum+4 ofrecen una aceleración más suave, máximo ahorro de combustible y rendimiento óptimo del motor.',
            description: "La bujías Bosch Platinum+4 ofrecen una aceleración más suave, máximo ahorro de combustible y rendimiento óptimo del motor. Las bujías Bosch Platinum+4 alcanzan temperaturas de autolimpieza con más rapidez, lo cual brinda arranques más rápidos, aceleración más suave y mayor economía de combustible.",
            urlimg: "https://www.boschautoparts.com/documents/101512/145627/Plat4_Desktop.png/54151992-807f-497e-9cad-dfaf404c27d6?t=1414186839270"
        },
        {
            id: 4,
            name: 'Cambio de Aceite',
            short_description: 'En Talleres AutoPRO realizamos el cambio de aceite de tu coche, con su respectiva revisión y cambio de filtos.',
            description: "En Talleres Tunyva Valladolid  realizamos el cambio de aceite de tu coche, con su respectiva revisión y cambio de filtos. <br>Cambiar el aceite es muy importante  para evitar el desgaste de las piezas y posibles averías. Usamos las marcas de mayor calidad para que tu vehículo funcione como nuevo cada día.<br>Cambiar el aceite de tu coche, con su respectiva revisión y cambio de filtros, es básico para el rendimiento del motor de tu coche.",
            urlimg: "http://www.tunyva.com/wp-content/uploads/2015/07/cambio_aceite_tunyva.png"
        },
        {
            id: 5,
            name: 'Frenos',
            short_description: 'La recomendación de cuándo cambiar las pastillas de frenos varía dependiendo del modelo del auto, del kilometraje del auto e incluso de la forma de conducir del usuario.',
            description: `La recomendación de cuándo cambiar las pastillas de frenos varía dependiendo del modelo del auto, del kilometraje del auto e incluso de la forma de conducir del usuario.
                Además, Automotriz Luren cuenta con una línea de líquidos para frenos y embragues.<br>
                BOSCH<br>
                FRENOSA<br>
                BENDIX<br>
                WAGNER<br>
                GULF<br>
                VISTONY<br>
                Y para reparaciones del sistema de frenos puede consultar por los accesorios de bomba, bombín de frenos, discos y tambores`,
            urlimg: "http://138.197.180.47/wp-content/uploads/2016/03/beneficios-de-los-frenos-de-ceramica.jpg"
        },
        {
            id: 6,
            name: 'Rin Niche M117 Misano',
            short_description: 'Rin M117 Niche Misano 17×8 5×100 – 5×112',
            description: "Rin M117 Niche Misano 17×8 5×100 – 5×112",
            urlimg: "https://carrosok.com/pe/accesorios/wp-content/uploads/2016/12/rin-niche-m117-misano-para-autos-vw-honda-bmw-seatford-D_NQ_NP_170901-MLM20442930616_102015-O.jpg"
        },
    ];

  private _resGarantia = [
          {
          id: 0,
              nombre: 'Simple',
              tiempo: '30 dias',
              description: "Dicha garantia es cubierta por 30 dias",
          },
          {
              id: 1,
              nombre: 'Normal',
              tiempo: '90 dias',
              description: "Dicha garantia es cubierta por 90 dias"
          },
          {
              id: 2,
              nombre: 'Premium',
              tiempo: '1 año',
              description: "Dicha garantia es cubierta por 1 año"
          },
          {
              id: 3,
              nombre: 'Premium-Long',
              tiempo: '2 año',
              description: "Dicha garantia es cubierta por 2 año"
          },
          {
              id: 4,
              nombre: 'Premium-Long-X',
              tiempo: '3 año',
              description: "Dicha garantia es cubierta por 3 año"
          },
          {
              id: 5,
              nombre: 'Premium-Long-XX',
              tiempo: '5 año',
              description: "Dicha garantia es cubierta por 5 año"
          }
      ];

  private _resProvider = [
          {
          id: 0,
              nombre: 'Turtle Wax',
              tipo_proveedor: 'Internacional',
              calidad: 'Bueno',
              prestigio: 'Bueno',
              garantia: 2,
          },
          {
          id: 1,
              nombre: 'Mobil',
              tipo_proveedor: 'Local',
              calidad: 'Excelente',
              prestigio: 'Bueno',
              garantia: 4,
          },
          {
          id: 2,
              nombre: 'Misano',
              tipo_proveedor: 'Internacional',
              calidad: 'Media',
              prestigio: 'Media',
              garantia: 1,
          },
          {
          id: 3,
              nombre: 'Toyota',
              tipo_proveedor: 'Internacional',
              calidad: 'Excelente',
              prestigio: 'Bueno',
              garantia: 2,
          }
      ];

  private _resBodega = [
          {
          id: 0,
              nombre: 'Sucursal #1',
              pisos: 3,
              area: 'Peligro',
              direccion: '',
          },
          {
          id: 0,
              nombre: 'Sucursal #2',
              pisos: 2,
              area: 'Limpieza',
              direccion: '',
          },
          {
          id: 0,
              nombre: 'Sucursal #3',
              pisos: 2,
              area: 'Pintura',
              direccion: '',
          }
      ];

}

// --- Modelo de datos para los productos.
// interface EnumServiceItem {
//     id: number;
//     short_description: string;
//     name: string;
//     description: string;
//     urlimg: string
// }
