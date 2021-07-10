import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  recoverLogin(){
    this.router.navigate(['/recuperar-senha']);
  }

  registerUser() {
    this.router.navigate(['/cadastro-usuario']);
  }

  login() {
    if (this.loginForm.valid) {
      localStorage.setItem('token', 'toquevalidadocomsucesso');
      this.router.navigate(['/dashboard']);
    } else {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Preencha corretamente todos os campos'
    });
    }
  }

}
