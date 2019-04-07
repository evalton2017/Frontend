import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasService} from '../../ofertas.service'

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar:string ='';

  constructor(
              private route:ActivatedRoute,
              private ofertasService:OfertasService
              ) { }

  ngOnInit() {
    //acessar parametro da rota pai
    //console.log('ID pai ',this.route.parent.snapshot.params['id'])
     this.ofertasService.getComoUsarOferta(this.route.parent.snapshot.params['id'])
                    .subscribe((data)=>{
                      return this.comoUsar=data[0];
                    })
  }

}
