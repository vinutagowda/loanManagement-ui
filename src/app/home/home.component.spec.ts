import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { SearchService } from '../service/search.service';
import {  Router, ActivatedRoute, UrlSerializer } from '@angular/router';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<HomeComponent>;
  var loanNumber: number;
  var firstName: string;
   var lastName:string;
   let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ HomeComponent ],
      providers: [ { provide: Router, useValue: mockRouter },HomeComponent],
    })
    component = TestBed.inject(HomeComponent);
    loanNumber = 102;
    firstName = "vinuta";
    lastName = "gowda";
 
    //.compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it("testing logout",()=>{
    component.logOut();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
 
  });
    // it("loan details fetched - with loan number",()=>{
    //   component.loanNumber = 102;
    //   component.OnClick();
    //   expect(component.message).toBe('Loan details fetched'); 
    // });
    // it("not able to fetch loan details - with loan number",()=>{
    //   component.loanNumber = undefined;
    //   component.OnClick();
    //   expect(component.message).not.toBe('Loan details fetched'); 
    // });
    // it("loan details fetched - with first name",()=>{
    //   component.firstName = 'vinuta';
    //   component.OnClick();
    //   expect(component.message).toBe('Loan details fetched'); 
    // });
    // it("not able to fetch loan details - with first name",()=>{
    //   component.firstName = undefined;
    //   component.OnClick();
    //   expect(component.message).not.toBe('Loan details fetched'); 
    // });
  
    // it("loan details fetched - with last name",()=>{
    //   component.lName = 'gowda';
    //   component.OnClick();
    //   expect(component.message).toBe('Loan details fetched'); 
    // });
    // it("not able to fetch loan details - with last name",()=>{
    //   component.lastName = undefined;
    //   component.OnClick();
    //   expect(component.message).not.toBe('Loan details fetched'); 
    // });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });