import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //public listadeMoedas:object = {}
  //public listadeMoedas1:any;

  public resultadoConversao = "00"
  public moeda1: any;
  public valor: any;
  public lista = new Array();

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.listarTodasMoedas()
  }

  listarTodasMoedas() {
    this.api.buscarMoedas().subscribe(res => {
      console.log(res, "minhas moedas")

      this.lista.push(res.ARS)
      this.lista.push(res.USD)
      this.lista.push(res.EUR)
      this.lista.push(res.JPY)
      this.lista.push(res.CNY)

    })
  }

  fazerConversao() {
    let conta = this.moeda1 * this.valor
    this.resultadoConversao = conta.toString()
    this.resultadoConversao = (conta.toFixed(2)).toString().replace(".", ",")
    console.log(this.resultadoConversao)
  }

}
