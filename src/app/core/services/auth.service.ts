import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { auth } from 'firebase';
import { User } from 'src/app/shared/models/user';
import { FormGroup } from '@angular/forms';

@Injectable()
export class AuthService {
  updateEmail(value: any) {
    throw new Error("Method not implemented.");
  }

  updateAddress(addressForm: FormGroup) {
    throw new Error("Method not implemented.");
  }

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
    // this.user$ = of({
    //   "uid": "HfjqhTqGs2gCsUSrhvEyOkM43Lw2",
    //   "email": "funnykamil2000@gmail.com",
    //   "photoURL": "https://lh3.googleusercontent.com/a-/AOh14GhcafJAJjhIH5ZTfptsM66bzD6QjMt3h56ny4UQ",
    //   "address": {
    //     "name": "Kamilek",
    //     "city": "Bydgoszcz",
    //     "lastName": "Czepielek",
    //     "street": "jaśkowa dolina",
    //     "number": "21/5",
    //     "zipCode": "86-003"
    //   },
    //   "displayName": "K4mczi"
    // });;

  }


  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    return this.updateUserData(result.user);
    //this.router.navigate(['admin/list']);
  }

  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    this.updateUserData(result.user);
    this.sendEmailVerification();
  }

  async sendEmailVerification() {
    await (await this.afAuth.currentUser).sendEmailVerification();
    this.router.navigate(['/verify-email']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        basic: true,
        admin: false
      }
    }

    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.afAuth.signOut();
    this.user$ = of(null);
  }

  get isLoggedIn(): boolean {
    if (this.user$)
      return true;
    else return false;
  }

}
