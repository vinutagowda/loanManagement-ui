import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Users } from '../model/users';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private router: Router;
  constructor(public http: HttpClient) { }
  public errorMessage = '';
  authenticated = false;
  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get(AppComponent.baseUrl + '/basicauth', {headers: headers})
    .subscribe((response) => {
        let data: any ;
        data = response;
        const u = data.principal;
        if (response['username']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback(data);
    });

}
  public logIn(user: Users) {
    // console.log(user);
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    const base64Credential: string = btoa( user.username + ':' + user.password);
    headers.set( 'Authorization', 'Basic ' + base64Credential);
    // console.log(headers);

    return this.http.get(AppComponent.baseUrl+ '/basicauth', {headers: headers});
  }

  logOut() {

  }
}