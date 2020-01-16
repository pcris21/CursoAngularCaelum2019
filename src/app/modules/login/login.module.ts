import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CmailFormGroupModule } from './../../components/cmail-form-group/cmail-form-group.module';
import { LoginService } from "src/app/services/login.service";

@NgModule({
    declarations:[LoginComponent      
    ],
    imports:[FormsModule,   
            CommonModule,    
            CmailFormGroupModule],
    exports:[LoginComponent],
    providers: [LoginService]

})

export class LoginModule{

}