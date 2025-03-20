import { Component,Output,Input, EventEmitter } from '@angular/core';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {
  @Input() pedidosListos: Pedido[] = [];
  @Output() pedidoEntregado = new EventEmitter<number>();

  entregarPedido(numero: number) {
    this.pedidoEntregado.emit(numero);  
  }
}
