import { TestBed } from '@angular/core/testing';
 
import { SearchService } from './search.service';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
 
describe('SearchService', () => {
  let service: SearchService;                
  var loanNumber: number;
  var firstName: string;
   var lastName:string;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SearchService);
    loanNumber = 102;
    firstName = "vinuta";
    lastName = "gowda";
 
  });
  // .compileComponents();
  // loanNumber: 102;
  // firstName: "vinuta";
  // lastName:"gowda";
  
   it('entering valid inputs - Success',()=>{
    expect(loanNumber).toMatch('102');
    expect(firstName).toMatch('vinuta');
    expect(lastName).toMatch('gowda');
  });
  it('entering valid inputs - User Not Found',()=>{
    expect(loanNumber).not.toBe(112);
    expect(firstName).not.toBe('xyz');
    expect(lastName).not.toBe('abc');
  });
 
it('should be created', () => {
    expect(service).toBeTruthy();
  });
});