import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private pedidosPendientes: Pedido[] = [];
  private pedidosListos: Pedido[] = [];

  crearPedido(pedido: Pedido) {
    this.pedidosPendientes = [...this.pedidosPendientes, pedido]; 
  }

  obtenerPedidosPendientes(): Pedido[] {
    return [...this.pedidosPendientes]; 
  }

  moverAPedidosListos(numero: number) {
    const index = this.pedidosPendientes.findIndex(p => p.number === numero);
    if (index !== -1) {
      const pedidoListo = this.pedidosPendientes.splice(index, 1)[0];
      this.pedidosListos = [...this.pedidosListos, pedidoListo]; 
    }
  }

  entregarPedido(numero: number) {
    this.pedidosListos = this.pedidosListos.filter(p => p.number !== numero); 
  }

  obtenerPedidosListos(): Pedido[] {
    return [...this.pedidosListos]; 
  }
}
