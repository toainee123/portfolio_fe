import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css'],
})
export class LoginPage  {
  token: string | null = null;

  loginForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  

  ngOninit(): void {
    const respone = localStorage.getItem('respone');
    if (respone) {
      const response = JSON.parse(respone);
      this.token = response.token || null; // Extract token if available
      console.log('Token from localStorage:', this.token);
    }
  }

  onSubmit(): void {
    const data = this.loginForm.value;
    console.log('Form submitted with data:', data);
    this.authService.login(data).subscribe({
      next: (res) => {
        window.alert('Login successful');
        const token = res.token;
        localStorage.setItem('token', token);
        if(token) {
          this.router.navigate(['/admin']);
        }
      },
      error: (err) => {
        window.alert('Login failed. Please check your credentials.');
      }
    })
  }
}
