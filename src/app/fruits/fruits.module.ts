import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FruitsRoutingModule } from './fruits-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubmitButtonComponent } from '../shared/submit-button/submit-button.component';
import { HeaderComponent } from '../shared/header/header.component';
import { CartcomponentComponent } from './cartcomponent/cartcomponent.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,
    RegisterComponent,
    LoginComponent,

    CartcomponentComponent,




  ],
  imports: [
    // BrowserAnimationsModule,
    CommonModule,
    FruitsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot(),



  ]
})
export class FruitsModule { }
