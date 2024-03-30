
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private auth:AuthService,private router: Router){}
  employee:Employee | undefined
  ngOnInit(): void {
   this.employee= this.auth.currentUser;
  }
logout(){
  this.auth.logout()
  this.router.navigate(['login']); // Navigate to the login page after logout

}
}