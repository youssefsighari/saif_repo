import { Component } from '@angular/core';
import { Admin } from '../admin';
import { LoginAdminService } from '../login-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
admin:Admin = new Admin();
  constructor(private loginadminservice: LoginAdminService){ }

  ngOnInit(): void {
  }

  adminLogin(){
    console.log(this.admin)
    this.loginadminservice.loginAdmin(this.admin).subscribe(data=>{
      alert("Login Successfully")
    },error=>alert("sorry Please enter correct name and password"));
  }

}
