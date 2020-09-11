import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UrlpermissionService } from './urlpermission/urlpermission.service';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'home',component: HomeComponent,canActivate: [UrlpermissionService]},
  {path:'login',component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
