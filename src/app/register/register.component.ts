import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  employeename: string ="";
  email: string ="";
  password: string ="";
  successMessage: string | undefined;
  errorMessage: string | undefined;
  employeelastName: any;


  constructor(private http: HttpClient,private auth:AuthService )
  {

  }
  save()
  {
  
    let bodyData = {
      "name" : this.employeename,
      "lastName" : this.employeelastName,
      "email" : this.email,
      "password" : this.password
    };
    this.auth.saveEmployee(bodyData).subscribe(
      (data) => {
        if (data && data.status === false) {
          console.error(data.message); // Log error message
          this.errorMessage = data.message; // Set error message for display
          this.successMessage = ''; // Clear success message
        } else {
          console.log('Success:', data.message); // Log success message
          this.successMessage = 'Employee added successfully!'; // Set success message for display
          this.errorMessage = ''; // Clear error message
        }
      },
      (error) => {
        console.error('An error occurred:', error); // Log general error
        this.errorMessage = 'An error occurred while saving the employee.'; // Set error message for display
        this.successMessage = ''; // Clear success message
      }
    );  
  }

}