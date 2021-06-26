import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './sharedComponents/navbar/navbar.component';
import { CadastroComponent } from './formulario/cadastros/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuarioComponent } from './formulario/cadastrar-usuario/cadastrar-usuario.component';
import { RelatorioDespesaComponent } from './despesa/relatorio-despesa/relatorio-despesa.component';
import { RelatorioReceitaComponent } from './receita/relatorio-receita/relatorio-receita.component';
import { RecuperarSenhaComponent } from './formulario/recuperar-senha/recuperar-senha.component';

//Materail Dessign modules
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroComponent,
    DashboardComponent,
    LoginComponent,
    CadastrarUsuarioComponent,
    RecuperarSenhaComponent,
    DashboardComponent,
    RelatorioDespesaComponent,
    RelatorioReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
