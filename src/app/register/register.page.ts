import {  Platform, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { User } from './../models/user';
import { LoginPage } from '../login/login.page'

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {} as User;

  constructor(private router: Router, private navCtrl: NavController, private fireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async register(user: User) {
    try {
    const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

    if(info) {
      this.navCtrl.navigateRoot('/home');  
      }
    }
    catch(e) {
      console.error(e);
    }
  }

}
