import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  model: any = {};

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient
  ) { }

  ngOnInit() {
      sessionStorage.setItem('token', '');
  }

  login() {
      let url = 'http://localhost:8080/users/login';
      this.http.post<Observable<boolean>>(url, {
          userName: this.model.username,
          email: this.model.username,
          password: this.model.password,
          roles: this.model.username
      }).subscribe(isValid => {
          if (isValid) { //?
              sessionStorage.setItem('token', btoa(this.model.username + ':' + this.model.password));
              this.router.navigate(['']);
          } else {
              alert("Authentication failed.")
          }
      });
  }
}