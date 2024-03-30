import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

  email: string ="";
  password: string ="";


  constructor(private router: Router,private http: HttpClient,private auth:AuthService) {}
 


  Login() {
    console.log(this.email);
    console.log(this.password);
 
    let bodyData = {
      email: this.email,
      password: this.password,
    };
 this.auth.login(bodyData).subscribe((resultData)=>{
 if (resultData) {
  console.log(resultData.message);
  
  if (resultData.message == "Email not exits")
  {

    alert("Email not exits");


  }
  else if(resultData.message == "Login Success")

   {
    this.router.navigateByUrl('/home');
  }
  else
  {
    alert("Incorrect Email and Password not match");
  }

 }
  

 })
    }

}