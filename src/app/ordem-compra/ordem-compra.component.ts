import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco:string=''
  public numero :string=''
  public complemento: string =''
  public formaPagamento:string=''


  //validação dos campos
  public enderecoValido:boolean
  public numeroValido:boolean
  public complementoValido:boolean
  public formaPagamentoValido:boolean

  //estados primitivos 
  public enderecoPri:boolean=true
  public numeroPri:boolean=true
  public complementoPri:boolean=true
  public formaParamentoPri:boolean=true

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string):void{
    this.endereco=endereco;
    
    this.enderecoPri=false;
    
    if(this.endereco.length >3){
      this.enderecoValido=true
    }else{
      this.enderecoValido=false
    }
  }

  public atualizaNumero(numero: string):void{
    this.numero=numero;
    
    this.numeroPri=false;

    if(this.numero.length >0){
      this.numeroValido=true
    }else{
      this.numeroValido=false
    }
  }

  public atualizaComplemento(complemento: string):void{
    this.complemento=complemento;
    
    this.complementoPri=false;

    if(this.complemento.length >0){
      this.complementoValido=true
    }else{
      this.complementoValido=false
    }
  }

  public atualizaFormaPagamento(formaPagamento: string):void{
    this.formaPagamento=formaPagamento;
    
    this.formaParamentoPri=false

    if(this.formaPagamento != ''){
      this.formaPagamentoValido=true
    }else{
      this.formaPagamentoValido=false
    }
  }

}
