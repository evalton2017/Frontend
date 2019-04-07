import {Oferta} from "./shared/oferta.model"
import {HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';

import{URL_API} from './app.api'


@Injectable()
export class OfertasService{

    public ofertas:Oferta;

    constructor(private http: HttpClient){ }
     

    public getOfertas(): Observable<Oferta[]>{
        return this.http.get<Oferta[]>(`${URL_API}/ofertas`)
                            
    }

    getOfertasCategorias(categoria:string):Observable<Oferta[]>{
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`)
    }

    getOfertasDiversao(categoria:string):Observable<Oferta[]>{
        return this.http.get<Oferta[]>(URL_API+`/ofertas?categoria=${categoria}`)
    }

    getOfertaPorId(id: number): Observable<Oferta[]>{
        return this.http.get<Oferta[]>(URL_API+`/ofertas?id=${id}`)
    }

    getComoUsarOferta(id:number):Observable<String>{
        return this.http.get<String>(`${URL_API}/como-usar?id=${id}`)
    }

    getOndeFicaOferta(id:number):Observable<String>{
        return this.http.get<String>(`${URL_API}/onde-fica?id=${id}`)
    }

    getPesquisaOfertas(busca:string):Observable<Oferta[]>{
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${busca}`)               

    }
}


