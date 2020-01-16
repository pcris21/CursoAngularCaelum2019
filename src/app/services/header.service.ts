
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeaderDataService{
    valorDoFiltro = new EventEmitter<string>();

    constructor(){
        this.atualizarTermoDeFiltro('')
    }

    atualizarTermoDeFiltro(novoValor: string){
        this.valorDoFiltro.emit(novoValor)
    }
}