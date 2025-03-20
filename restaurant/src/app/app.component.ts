import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POSComponent } from './pos/pos.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DeliveryPointComponent } from './delivery-point/delivery-point.component';
import { Pedido } from './models/pedido';
import { RestaurantService } from './services/restaurant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,POSComponent,KitchenComponent,DeliveryPointComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "";
  pedidosPendientes: Pedido[] = [];
  pedidosListos: Pedido[] = [];

  constructor(private pedidoService: RestaurantService) {}

  ngOnInit() {
    this.cargarPedidos();
  }

  cargarPedidos() {
    this.pedidosPendientes = this.pedidoService.obtenerPedidosPendientes();
    this.pedidosListos = this.pedidoService.obtenerPedidosListos();
  }

  agregarPedido(pedido: Pedido) {
    this.pedidoService.crearPedido(pedido);
    this.cargarPedidos();
  }

  moverAPedidoListo(numero: number) {
    this.pedidoService.moverAPedidosListos(numero);
    this.cargarPedidos();
  }

  entregarPedido(numero: number) {
    this.pedidoService.entregarPedido(numero);
    this.cargarPedidos();
  }
}
