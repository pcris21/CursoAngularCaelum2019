import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

import { PageDataService } from './../../services/page.service';
import { HeaderDataService } from 'src/app/services/header.service';


@Component({
    selector: 'cmail-caixa-de-entrada',
    templateUrl:'./caixa-de-entrada.component.html',
    styles: []

})

export class CaixaDeEntradaComponent implements OnInit{
title = 'cmail';
termoParaFiltro = '';

  ngOnInit(): void {
    this.emailService
    .listar()
    .subscribe(
      lista => {
        this.emailList = lista;

      }
    )
        //Definimos o titulo da pagina
        this.pageDataService.defineTitulo('Caixa de entrada - CMAIL');
        this.headerService
        .valorDoFiltro
        .subscribe(novoValor => this.termoParaFiltro = novoValor)

  }



private _isNewEmailFormOpen = false;
emailList = [];
email = {
  destinatario: '',
  assunto: '',
  conteudo: ''
}

constructor(private emailService: EmailService,
            private pageDataService: PageDataService,
            private headerService: HeaderDataService){}

get isNewEmailFormOpen(){
  return this._isNewEmailFormOpen;
}

toggleNewEmailForm(){
  this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
}

handleNewEmail(formEmail: NgForm){
  
  if(formEmail.invalid) return;

  this.emailService
  .enviar(this.email)
  .subscribe(
    emailApi =>{
      this.emailList.push(emailApi)
      this.email = {destinatario:'', assunto:'', conteudo:''}
      formEmail.reset();
      this.emailService
  .listar()
  .subscribe(
    lista => {
      this.emailList = lista;
    })
    }
    ,erro => console.error(erro)
  )
  
}
  handleRemoveEmail(eventoVaiRemover, emailId){
    console.log('Clicou no item!')
    if(eventoVaiRemover.status === 'removing'){
      this.emailService
      .deletar(emailId)
      .subscribe(
        res => {
          console.log(res);
          this.emailList = this.emailList.filter(email => email.id != emailId)
        }, err => console.log(err)
      )
    }
  }

  filtrarEmailsPorAssunto(){
    const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();
    return this.emailList.filter(email =>{
      const assunto = email.assunto.toLowerCase()
      return assunto.includes(termoParaFiltroEmMinusculo)
    })
  }
}

