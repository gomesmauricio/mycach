import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  recuperarSenha() {
    this.router.navigate(['/cadastro-usuario']);
  }

  backToLogin(){
    this.router.navigate(['/login']);
  }

}
