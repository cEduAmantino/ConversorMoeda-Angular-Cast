import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'cadastro', component:CadastroComponent},
  {path: '**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
