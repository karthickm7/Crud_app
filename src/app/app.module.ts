import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsModule } from './fruits/fruits.module';
import { AuthguardSeviceService } from './authguard-sevice.service';
import{httpHttpInterceptor} from './service/http.interceptor.service'
import {
  HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthenticationGuard } from './authentication.guard';
import { HeaderComponent } from './shared/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FruitsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
   
    ModalModule.forRoot(),
    ToastrModule.forRoot(),



  ],

  providers: [AuthguardSeviceService,AuthenticationGuard,BsModalService,{provide:HTTP_INTERCEPTORS,useClass:httpHttpInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

//
