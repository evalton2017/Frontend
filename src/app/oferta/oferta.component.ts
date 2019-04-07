import { Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasService} from '../ofertas.service';
import{Oferta} from '../shared/oferta.model'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta:Oferta;

  constructor(
      private route: ActivatedRoute, 
      private ofertaService:OfertasService
  ) { }

  ngOnInit() {
    //console.log('Id da rota ',this.route.snapshot.params['id'])
    /*this.route.params.subscribe((parametro: any)=>{
      console.log(parametro.id)
    })*/

    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
              .subscribe(
                (data)=>{
                return this.oferta=data[0];
              }),
              (erro:any)=>console.log(erro)
   
  }

  ngOnDestroy(){
;
  }

}
