import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'clients', component: ClientListComponent},
  {path: 'create-client', component: CreateClientComponent},
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'update-client/:id', component: UpdateClientComponent},
  {path: 'client-details/:id', component: ClientDetailsComponent},
  {path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
