import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, UrlSerializer } from '@angular/router';
// import { AuthService } from '../service/auth.service';
import {User} from '../model/user'
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  enabled: boolean;
  static nativeElement: any;
  static triggerEventHandler(arg0: string, arg1: null) {
    throw new Error("Method not implemented.");
  }
  users=new User("", "")
  form: FormGroup;
  title="Loan Management"
  
  // userName = ''
  // password = ''
  // invalidLogin = false
  // errorMessage = 'Invalid Credentials';
  // successMessage: string;
  // validLogin = false


  constructor(private router: Router,
) { }

  ngOnInit() {
  }

  handleLogin() {
        this.router.navigate(['/home'])

  }

}
// private loginservice: AuthService