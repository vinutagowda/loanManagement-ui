//import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userName:DebugElement;
  let password:DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
    component=fixture.componentInstance;
    userName=fixture.debugElement.query(By.css('input=id[username]'));
    password=fixture.debugElement.query(By.css('input=id[password]'))

  }));
  
 
  it('entering value into inputs',()=>{
    userName.nativeElement.value="vinuta";
    password.nativeElement.value="vinuta@123";
    expect(component.form.valid).toBeTruthy();

  });
  it('entering value into inputs',()=>{
    let users:any;
    userName.nativeElement.value="nikila";
    password.nativeElement.value="1234";
    expect(component.form.valid).toBeFalsy();


    //component.handleLogin.subscribe(() => users = value);
    LoginComponent.triggerEventHandler('click', null);
    expect(users.username).toBe("vinuta");
    expect(users.password).toBe("vinuta@123");

  });
  


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'Loan Management' as title`, async(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Loan Management');
  }));

});
