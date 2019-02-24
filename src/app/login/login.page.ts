import { AngularFireAuth} from 'angularfire2/auth';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { RegisterPage } from '../register/register.page'

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User; 

  constructor( private router: Router, private fireAuth: AngularFireAuth ) { }

  ngOnInit() {
  }

  login() {

  }

  register() {
    this.router.navigateByUrl('/register');
  }
}
