import { Component, OnInit, Injectable } from '@angular/core';
import { SearchService } from '../service/search.service';
import { FormGroup } from '@angular/forms';
import { Users } from '../model/users';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loanNumber : number;
  firstName :string;
  lastName:string;
  user : any;
  message: string;
  currentUser: Users;

  constructor(private service : SearchService,
    public authService: AuthenticationService,
     public router: Router) {
      this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

      }
  ngOnInit() {
  }

  logOut() {
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

  public OnClick(){
       if(this.loanNumber ){
        this.message="Loan details fetched"
       let response = this.service.getLoanDetails(this.loanNumber);
       response.subscribe(data => this.user = data);
       }
       else if(this.firstName ){
        this.message="Loan details fetched"
        let response = this.service.getByFname(this.firstName);
        response.subscribe(data => this.user = data);
      }
      else if(this.lastName ){
        this.message="Loan details fetched"
        let response = this.service.getByLname(this.lastName);
        response.subscribe(data => this.user = data);  
      }  
    
  }

}
