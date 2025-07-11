import { Component } from '@angular/core';
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
export class LoginPage {

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

  onSubmit(): void {
    const data = this.loginForm.value;
    console.log('Form submitted with data:', data);
    this.authService.login(data).subscribe({
      next: (res) => {
        const token = res.token;
        if(token){
          localStorage.setItem('respone', JSON.stringify(res));
          this.router.navigate(['/home']);
        }
      },
      error: (err) => err.message
    })
  }
}
