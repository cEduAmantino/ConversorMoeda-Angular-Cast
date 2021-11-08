import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // user: Observable<firebase.User>;
  authError: any;
  constructor(public fireBaseAuth: AngularFireAuth) {
    // this.user = fireBaseAuth.authState;
  }

  loginWithEmail(email: string, senha: string) {
    let thisService = this;
    thisService.authError = null;

    this.fireBaseAuth.signInWithEmailAndPassword(email, senha)
      .then(
        value => {
          console.log("Usuário logado")
          
        }

      ).catch((error) => {

        console.log(error.menssage);
        alert("Email ou Senha incorretos!");
        thisService.authError = error;
      })
  }

}
