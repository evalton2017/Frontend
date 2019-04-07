import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
      this.ofertasService.getOndeFicaOferta(this.route.parent.snapshot.params['id'])
                  .subscribe((data)=>{
                      return this.ondeFica=data[0];
                  })
  }

}
