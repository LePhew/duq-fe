import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = "";
  contrasena: string = "";

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit(): void {

  }

  async login() {

    let validated: boolean = await this._loginService.validate(this.usuario, this.contrasena);

    if (validated) {
      this._router.navigateByUrl('/home');
    }
    else {
      alert("Wrong username or password");
    }

  }

}
