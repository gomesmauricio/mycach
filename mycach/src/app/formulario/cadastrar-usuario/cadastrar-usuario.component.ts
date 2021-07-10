import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.querySelector('html').style.background = 'linear-gradiente(to right, #00934, #67cf43, #fadfla)';
  }

  ngOnDestroy(){
    document.querySelector('html').style.background = 'none';
  }

  backToLogin(){
    this.router.navigate(['/login']);
  }

}
