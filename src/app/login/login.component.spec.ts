import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {  Router, ActivatedRoute, UrlSerializer } from '@angular/router';
import { NgForm, FormsModule }   from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  var userName: string;
  var password: string;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ LoginComponent , NgForm],
      providers: [ { provide: Router, useValue: '' }],
    })
    .compileComponents();
    userName = "vinuta";
    password = "vinuta@123";
    

  });
  
 
  it('entering valid inputs - Success',()=>{
   
    expect(userName).toMatch('vinuta');
    expect(password).toMatch('vinuta@123');

  }); 
  it('entering valid inputs - Failour',()=>{
   
    expect(userName).not.toBe('vin');
    expect(password).not.toBe('vinuta121');

  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
