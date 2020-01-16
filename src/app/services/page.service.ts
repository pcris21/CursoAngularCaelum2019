import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' //aqui é possivel definir a partir do carregamento de um modulo o serviço será carregado
})
export class PageDataService{
    titulo = new EventEmitter<string>();

    defineTitulo(novoTitulo: string){
        document.querySelector('title').textContent = novoTitulo;
        this.titulo.emit(novoTitulo);
    }

}