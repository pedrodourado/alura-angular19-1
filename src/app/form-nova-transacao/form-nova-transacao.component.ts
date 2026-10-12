import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transacao } from '../modelos/transacao';
import { TipoTransacao } from '../modelos/transacao';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {

  tipoTransacao: string = "";
  valorTransacao: string = "";

  transacaoCriada = output<Transacao>();

  aoSubmeter() {

    const transacao = new Transacao(this.tipoTransacao as TipoTransacao, Number(this.valorTransacao));
    
    this.transacaoCriada.emit(transacao);

    this.tipoTransacao = "";
    this.valorTransacao = "";
    
  }

}
