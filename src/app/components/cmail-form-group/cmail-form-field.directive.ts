import{Directive, ElementRef, OnInit} from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Directive({
    selector: '[cmailFormField]'
})

export class CmailFormFieldDirective implements OnInit{
    ngOnInit(): void {
        const campo = this.campo.nativeElement;

if(campo.name){
    campo.id = campo.name;
    campo.setAttribute('placeholder', '');
    campo.classList.add('mdl-textfield__input');
}else{
    throw new Error("Atributo 'name' é obrigatório")
}
        
    }
    constructor(private campo: ElementRef){}

}