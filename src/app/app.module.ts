import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { CadastroComponent } from './cadastro/cadastro.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthService } from './auth.service';
import { CadastroAdmComponent } from './cadastro-adm/cadastro-adm.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page404Component,
    CadastroComponent,
    CadastroAdmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBSFEhmTRa-9Fbo4J14KiQAx13Mx4RjtUM",
        authDomain: "conversor-claudio-cast-7da89.firebaseapp.com",
        projectId: "conversor-claudio-cast-7da89",
        storageBucket: "conversor-claudio-cast-7da89.appspot.com",
        messagingSenderId: "71137261660",
        appId: "1:71137261660:web:890918d306e8b739380e99"
      }
    ), AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }