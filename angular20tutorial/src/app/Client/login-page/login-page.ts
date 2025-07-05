import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css'],
})
export class LoginPage {
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Login Data', form.value);
      // TODO: Implement authentication logic here (e.g., call auth service)
    }
  }
}
