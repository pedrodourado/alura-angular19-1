import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-boas-vindas',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './boas-vindas.component.html',
  styleUrl: './boas-vindas.component.css'
})
export class BoasVindasComponent {

  dataAtual = new Date();

}
