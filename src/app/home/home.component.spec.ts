import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { SearchService } from '../service/search.service';
import { Router, ActivatedRoute, UrlSerializer } from '@angular/router';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<HomeComponent>;
  var loanNumber: number;
  var firstName: string;
  var lastName: string;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HomeComponent],
      providers: [{ provide: Router, useValue: mockRouter }, HomeComponent],
    })
    component = TestBed.inject(HomeComponent);
    loanNumber = 102;
    firstName = "vinuta";
    lastName = "gowda";

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("testing logout", () => {
    component.logOut();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
  });
  it("loan details fetched - with loan number", () => {
    component.search.loanNumber = 102;
    component.OnClick();
    console.log(component.response);
    expect(component.response).not.toBeUndefined();

  });
  it("not able to fetch loan details - with loan number", () => {
    component.search.loanNumber = undefined;
    component.OnClick();
    expect(component.response).toBeUndefined();
  });
  it("loan details fetched-with first Name", () => {
    component.search.firstName = 'vinuta';
    component.OnClick();
    expect(component.response).not.toBeUndefined();
  });
  it("not able to fetch loan details-with first Name ", () => {
    component.search.firstName = undefined;
    component.OnClick();
    expect(component.response).toBeUndefined();

  });
  it("loan details fetched-with last Name", () => {
    component.search.lastName = 'gowda';
    component.OnClick();
    expect(component.response).not.toBeUndefined();
  });
  it("not able to fetch loan details-with last Name", () => {
    component.search.lastName = undefined;
    component.OnClick();
    expect(component.response).toBeUndefined();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});