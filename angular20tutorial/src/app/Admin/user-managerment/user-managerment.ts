import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth-service';
import { CommonModule } from '@angular/common';

export interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

@Component({
  selector: 'app-user-managerment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-managerment.html',
  styleUrl: './user-managerment.css'
})

export class UserManagerment {


  users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', active: true },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', active: false },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', active: true }
  ];

  constructor(private auth: AuthService, private router: Router) {}

  updateUser(user: User): void {
    // Placeholder - integrate with your update logic or navigation to edit page
    alert(`Update user ${user.name}`);
  }

  deleteUser(user: User): void {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      this.users = this.users.filter(u => u.id !== user.id);
    }
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  addUser (): void {
    
  }
}
