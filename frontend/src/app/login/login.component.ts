import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        this.authService.saveToken(data.token);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/home']);
      },
      error: err => {
        this.errorMessage = err.error.error;
        this.isLoginFailed = true;
      }
    });
  }
}
