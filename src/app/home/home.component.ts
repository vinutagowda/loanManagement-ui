import { Component, OnInit, Injectable } from '@angular/core';
import { SearchService } from '../service/search.service';
import { FormGroup } from '@angular/forms';
import { Search } from '../model/search';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Users } from '../model/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
search:Search=new Search();
  valid=false;
  error=false;
  errorMessage="No results found";
  currentUser: Users;
  user: any;
  response:any;

  constructor(private service : SearchService,
    public authService: AuthenticationService,
     public router: Router) {
      this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

      }

  ngOnInit() {
    this.error=false;  
      this.search=new Search();
      this.user=null;
  }

  logOut() {
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

  public OnClick(){
       if(this.search.loanNumber){
       this.response = this.service.getLoanDetails(this.search.loanNumber);
      this.response.subscribe(data =>
        {if(data==null){this.error=true}
        else{
        this.user=data
        this.valid=true
        this.error=false}
      });

       
       }
       else if(this.search.firstName ){
        this.response = this.service.getByFname(this.search.firstName);
        this.response.subscribe(data =>
          {if(data==null){this.error=true}
          else{
          this.user=data
          this.valid=true
          this.error=false}
        });
  
      }
       else if(this.search.lastName ){
        this.response = this.service.getByLname(this.search.lastName);
        this.response.subscribe(data =>
          {if(data==null){this.error=true}
          else{
          this.user=data
          this.valid=true
          this.error=false}
        });
    
      } 
        // else{
        //  this.error=true;
        // }
       

  }

}
