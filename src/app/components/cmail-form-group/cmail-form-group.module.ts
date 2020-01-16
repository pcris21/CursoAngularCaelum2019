import { NgModule } from "@angular/core";
import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { CmailFormGroupComponent } from './cmail-form-group.component';
import { CommonModule } from "@angular/common";
import { SharedComponentModule } from "../shared-components.module";

@NgModule({
    declarations:[CmailFormFieldDirective,
                  CmailFormGroupComponent],
    
    imports: [CommonModule,
              SharedComponentModule],

    exports: [CmailFormFieldDirective,
              CmailFormGroupComponent]
})

export class CmailFormGroupModule{

}