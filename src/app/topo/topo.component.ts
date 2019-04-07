import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, of} from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa:Subject<string> = new Subject<string>()

  constructor(private ofertasService:OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorna um array de ofertas
      .pipe(
        debounceTime(1000),//escuta a ação e somente a executará após 1 segundo
        switchMap((busca:string)=>{
          console.log("requisao api")
          if(busca.trim()===''){
            //se a busca for vazio retorna um observable vazio
            return of<Oferta[]>([])
          }
          return this.ofertasService.getPesquisaOfertas(busca)
        })
      )

    this.ofertas.subscribe((ofertas:Oferta[])=>{
      console.log(ofertas)
    })
      
  }

  public pesquisa(busca:string):void{
    this.subjectPesquisa.next(busca)
  }

}
