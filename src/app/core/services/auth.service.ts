import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { auth } from 'firebase';
import { User } from 'src/app/shared/models/user';
import { FormGroup } from '@angular/forms';
import { AddressFormValues } from 'src/app/shared/models/AddressFormValues';

@Injectable()
export class AuthService {


  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {

    this.subscribeToUser();
  }

  subscribeToUser(){
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  updateEmail(email: string) {
    return this.user$.pipe(
      switchMap((value, index) => {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${value.uid}`);
        const data: User = value;
        data.email = email;
        return userRef.set(data, { merge: true })
      }));
  }

  updatePhone(phone: any) {
    return this.user$.pipe(
      switchMap((value, index) => {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${value.uid}`);
        const data: User = value;
        data.phone = phone;
        return userRef.set(data, { merge: true })
      }));
  }

  updateAddress(address: AddressFormValues) {
    return this.user$.pipe(
      switchMap((value, index) => {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${value.uid}`);

        const data: User = value;
        data.address = address;
        return userRef.set(data, { merge: true })
      }));
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
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    let data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        basic: true
      }
    }
    this.subscribeToUser();
    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.afAuth.signOut();
    this.user$ = null;
  }

  get isLoggedIn(): boolean {
    if (this.user$)
      return true;
    else return false;
  }

  hasAdmin(user: User): boolean {
    return this.checkAuthorization(user, ['admin'])
  }
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    console.log("s")
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true
      }
    }
    return false
  }
}
