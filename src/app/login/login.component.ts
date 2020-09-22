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
  success:''
  invalidlogin= false;
  validlogin=false;
  resp: any;
  constructor(private authService: AuthenticationService, private router: Router) { }
  ngOnInit() {
  }
  login() {
    if(this.validlogin=true){
    this.authService.authenticate(this.user, (e) => {
    this.router.navigateByUrl('/home');
      this.resp = e.principal;
      if (this.resp) {
        this.validlogin=true;
        sessionStorage.setItem('currentUser', JSON.stringify(this.resp));
      }
    });
  
  }
  
  
  //jfdkfg

  }
}
