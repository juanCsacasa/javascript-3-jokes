import { Observador } from './observer.js';

// Definir la clase VistaProducto que actúa como observador
// export class VistaProducto {
//   constructor() {
//     this.producto = null;
//     this.observador = new Observador();
//   }

//   update(producto) {
//     this.producto = producto;
//     this.render();
//   }

//   render() {
//     const productImageElement = document.getElementById('product-image');
//     productImageElement.setAttribute('src', this.producto.imagen);
//   }
// }

export class VistaProducto {
  constructor() {
    this.producto = null;
    this.observador = new Observador();
  }

  update(producto) {
    this.producto = producto;
    this.render();
  }

  render() {
    const productImageElement = document.getElementById('product-image');
    console.log(this.data);
    productImageElement.setAttribute('src', this.producto.img);
  }
}