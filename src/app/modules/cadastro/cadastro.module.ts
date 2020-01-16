import { NgModule } from "@angular/core";
import { CadastroComponent } from './cadastro.component';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedComponentModule } from "src/app/components/shared-components.module";
import { CadastroRoutingModule } from "./cadastro-routing.module";
import { CmailFormGroupModule } from './../../components/cmail-form-group/cmail-form-group.module';


@NgModule({
    declarations:[
        CadastroComponent,       
    ],
    imports: [
    
    CommonModule,
        ReactiveFormsModule,
        SharedComponentModule,
        CadastroRoutingModule,
        CmailFormGroupModule
    ],
    exports: [CadastroComponent]
})

export class CadastroModule{

}