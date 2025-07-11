import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder , Validators , ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../auth-service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  private authService = inject(AuthService);
  registerForm: FormGroup
  
  constructor( 
    private fb: FormBuilder,
    private router: Router
  )
  {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  

  onSubmit(): void {
    const data = this.registerForm.value
    console.log('Form submitted with data:', data);
    this.authService.register(data).subscribe({
      next: (res) => {
        console.log('response from registration', res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed', err.message);
        alert('Registration failed. Please try again.');
      }
    });
  }
}
