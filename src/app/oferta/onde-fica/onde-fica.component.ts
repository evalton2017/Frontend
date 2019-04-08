import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {OfertasService} from '../../ofertas.service'


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica:String='';

  constructor(
              private route:ActivatedRoute,
              private ofertasService:OfertasService
              ) { }

  ngOnInit() {
    
    this.route.parent.params.subscribe((parametros:Params)=>{
      this.ofertasService.getOndeFicaOferta(parametros.id)
      .subscribe((data)=>{
          return this.ondeFica=data[0];
      })
    })
    
  }

}
