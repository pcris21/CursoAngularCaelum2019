import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';
import { PageDataService } from './../services/page.service';


@NgModule({
    declarations:[HeaderComponent, CmailListItemComponent
      ],
    imports:[CommonModule],   
    exports:[HeaderComponent, CmailListItemComponent],
    providers: [PageDataService]
})

export class SharedComponentModule{

}