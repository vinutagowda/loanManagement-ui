import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import {Users} from '../model/users'
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Users = new Users();
  errorMessage:'Invalid user';
  invalidlogin= false;
  validlogin=false;
  constructor(private authService: AuthenticationService, private router: Router) { }



  ngOnInit() {
  }
  login() {
    this.authService.authenticate(this.user, (e) => {
      this.invalidlogin=false;
      this.validlogin=true;
      this.router.navigateByUrl('/home');
      let resp: any;
      resp = e.principal;
      if (resp) {
        sessionStorage.setItem('currentUser', JSON.stringify(resp));
      }
    });
  }
}
