import { CommonModule } from '@angular/common';
import { Component , Input,Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  @Input() pedidosPendientes: Pedido[] = [];
  @Output() pedidoListo = new EventEmitter<number>();

  pedidosListos: Pedido[] = [];
  pedidoEnProceso: Pedido | null = null;

  cocinarPedido(numero: number) {
    if (this.pedidoEnProceso) return; 


    const pedido = this.pedidosPendientes.find(p => p.number === numero);
    if (pedido) {

      this.pedidosPendientes = this.pedidosPendientes.filter(p => p.number !== numero);


      this.pedidoEnProceso = pedido;
      

      this.pedidosListos.push(pedido);
    }
  }

  pedidoTerminado(numero: number) {
    this.pedidosListos = this.pedidosListos.filter(p => p.number !== numero);
    this.pedidoEnProceso = null; 
    this.pedidoListo.emit(numero); 
  }
}
