import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styles: []
})
export class CmailListItemComponent implements OnInit {

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  removeEmail(click: Event){
    console.log('clicou em remover');
    if(confirm('Tem Certeza?')){
      this.vaiRemover.emit({status: 'removing'})
    }
  }

}
