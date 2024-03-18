import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { Product } from './interface/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    ProductComponent,
    ProductsDetailsComponent,
  ],
})
export class AppComponent {
  title = 'auto-store';
  productosDeAuto: Product[] = [
    {
      name: 'Sistema de Navegación GPS',
      description: 'Navegación GPS de alta precisión para vehículos',
      descriptionLong:
        'Sistema de navegación GPS con mapas actualizados, indicaciones de voz y pantalla táctil',
      quantity: 100,
      price: '$199.99',
      imgUrl: './assets/img/img-Sistema-de-navegacion-GPS.jpg',
    },
    {
      name: 'Cámara de Reversa',
      description: 'Cámara de visión trasera para estacionamiento',
      descriptionLong:
        'Cámara de alta definición para montar en la parte trasera del vehículo, ayuda en maniobras de estacionamiento',
      quantity: 150,
      price: '$49.99',
      imgUrl: './assets/img/img-Camara-de-retroceso.jpg',
    },
    {
      name: 'Kit de Iluminación LED',
      description: 'Luces LED para interior y exterior del automóvil',
      descriptionLong:
        'Kit completo de luces LED para mejorar la iluminación interior y exterior del automóvil',
      quantity: 80,
      price: '$79.99',
      imgUrl: './assets/img/img-Kit-de-luces-LED.jpg',
    },
    {
      name: 'Sistema de Audio Bluetooth',
      description: 'Sistema de audio para automóvil con conectividad Bluetooth',
      descriptionLong:
        'Sistema de audio de alta fidelidad con conexión Bluetooth para reproducir música desde dispositivos móviles',
      quantity: 120,
      price: '$149.99',
      imgUrl: './assets/img/img-Sistema-de-navegacion-GPS.jpg',
    },
    {
      name: 'Protector de Parachoques',
      description: 'Protector de goma para parachoques',
      descriptionLong:
        'Protector de parachoques resistente y duradero para evitar daños al estacionar en espacios reducidos',
      quantity: 200,
      price: '$19.99',
      imgUrl: './assets/img/img-Sistema-de-navegacion-GPS.jpg',
    },
    {
      name: 'Kit de Herramientas para Auto',
      description:
        'Kit completo de herramientas para reparaciones básicas de automóviles',
      descriptionLong:
        'Kit de herramientas esenciales que incluye llaves, alicates y destornilladores para reparaciones de emergencia en el automóvil',
      quantity: 100,
      price: '$69.99',
      imgUrl: './assets/img/img-Sistema-de-navegacion-GPS.jpg',
    },
    {
      name: 'Aspiradora Portátil para Auto',
      description: 'Aspiradora de mano para limpiar el interior del automóvil',
      descriptionLong:
        'Aspiradora compacta y potente diseñada para limpiar fácilmente el interior del automóvil',
      quantity: 150,
      price: '$29.99',
      imgUrl: './assets/img/img-Sistema-de-navegacion-GPS.jpg',
    },
    {
      name: 'Cargador de Teléfono para Automóvil',
      description: 'Cargador de teléfono con puertos USB para automóvil',
      descriptionLong:
        'Cargador de teléfono de alta velocidad con múltiples puertos USB para cargar dispositivos móviles mientras se conduce',
      quantity: 180,
      price: '$14.99',
      imgUrl: './assets/img/img-Sistema-de-navegacion-GPS.jpg',
    },
    {
      name: 'Funda de Asiento de Cuero',
      description: 'Funda de asiento de cuero sintético para automóvil',
      descriptionLong:
        'Funda de asiento elegante y duradera hecha de cuero sintético para proteger los asientos del automóvil y mejorar el aspecto interior',
      quantity: 120,
      price: '$39.99',
      imgUrl: './assets/img/img-Asientos-de-cuero.jpg',
    },
    {
      name: 'Organizador de Maletero Plegable',
      description:
        'Organizador de maletero plegable para mantener ordenado el espacio de carga',
      descriptionLong:
        'Organizador versátil y resistente para el maletero del automóvil, con compartimentos ajustables y capacidad de plegado para un fácil almacenamiento',
      quantity: 100,
      price: '$24.99',
      imgUrl: './assets/img/img-Sistema-de-navegacion-GPS.jpg',
    },
  ];
}
