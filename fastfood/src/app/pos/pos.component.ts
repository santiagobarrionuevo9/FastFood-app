import { Component, Output, EventEmitter } from '@angular/core';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {
  cliente: string = '';
  descripcion: string = '';

  @Output() nuevoPedido = new EventEmitter<Pedido>();

  onSubmit() {
    const pedido: Pedido = {
      number: Math.floor(Math.random() * 1000) + 1,
      name: this.cliente,
      description: this.descripcion,
      date: new Date(),
    };
    this.nuevoPedido.emit(pedido);  
    this.cliente = '';
    this.descripcion = '';
  }
}
