import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RelatorioDespesaComponent } from './despesa/relatorio-despesa/relatorio-despesa.component';
import { RelatorioReceitaComponent } from './receita/relatorio-receita/relatorio-receita.component';
import { CadastrarUsuarioComponent } from './formulario/cadastrar-usuario/cadastrar-usuario.component';
import { RecuperarSenhaComponent } from './formulario/recuperar-senha/recuperar-senha.component';
import { CadastroComponent } from './formulario/cadastros/cadastro.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'relatorio-despesa', component: RelatorioDespesaComponent},
  {path: 'relatorio-receita', component: RelatorioReceitaComponent},
  {path: 'cadastro-usuario', component: CadastrarUsuarioComponent},
  {path: 'recuperar-senha', component: RecuperarSenhaComponent},
  {path: 'cadastros', component: CadastroComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
