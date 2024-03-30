import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'clients', component: ClientListComponent,canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'create-client', component: CreateClientComponent},
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'update-client/:id', component: UpdateClientComponent,canActivate:[AuthGuard]},
  {path: 'client-details/:id', component: ClientDetailsComponent,canActivate:[AuthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
