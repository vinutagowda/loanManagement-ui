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
 
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ HomeComponent ],
      providers: [ { provide: Router, useValue: '' },HomeComponent],
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
 
  
    it("loan details fetched - with loan number",()=>{
      if(loanNumber){
       
      //  expect(loanNumber).toEqual(102);
      //  expect(firstName).toMatch('vinuta');
      //  expect(lastName).toMatch('gowda');
      }
 
    });
    it("loan details fetched - with first name",()=>{
      if(firstName){
       
      // expect(firstName).toMatch('vinuta');
      // expect(loanNumber).toEqual(102);
      // expect(lastName).toMatch('gowda');
      }
    });
  
    it("loan details fetched - with last name",()=>{
      if(lastName){
       
      //   expect(firstName).toMatch('vinuta');
      // expect(loanNumber).toEqual(102);
      // expect(lastName).toMatch('gowda');
      }
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });