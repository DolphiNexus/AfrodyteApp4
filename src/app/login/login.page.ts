import { HomePage } from './../home/home.page';

import {  Platform, NavController } from '@ionic/angular';
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

  constructor( private router: Router, private navCtrl: NavController, private fireAuth: AngularFireAuth ) { }

  ngOnInit() {
  }

    async login(user: User) {
      try {
      const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  
      if(info) {
        await this.navCtrl.navigateRoot('/home');  
        }
      }
      catch(e) {
        console.error(e);
      }
    }

  register() {
    this.router.navigateByUrl('/register');
  }
}
