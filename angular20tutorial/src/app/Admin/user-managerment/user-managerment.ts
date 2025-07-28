import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth-service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../service/user-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-managerment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-managerment.html',
  styleUrls: ['./user-managerment.css']
})

export class UserManagerment {
  isError: boolean = false;
  isSuccess: boolean = false;
  users: any[] = [];
  token: string | null = null;
  // userById: any;

  constructor(
    private auth: AuthService, 
    private router: Router,
    private userService: UserService,
    private modalService: NgbModal
    
  ) 
  {
    this.loadUsers();
    const getToken = localStorage.getItem('token');
    if (!getToken) {
      this.router.navigate(['/login']);
    }
    this.token = getToken;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  // updateUser(user: any, updateUserContent: any): void {
  //   this.userService.getUserById(user._id, this.token!).subscribe({
  //     next: (res) => {
  //       this.userById = res;
  //     },
  //     error: (err) => {
  //       console.error(err);
  //     }
  //   });
  //   this.modalService.open(updateUserContent, { centered: true });
  // }
  addUser(form: NgForm): void {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    if (!this.token) {
      return;
    }
    const { email, password, role } = form.value;
    const userPayload = { email, password, role };
    this.userService.createUser(userPayload, this.token).subscribe({
      next: () => {
        // refresh list
        this.loadUsers();
        form.resetForm();
        this.isSuccess = true;
        this.modalService.dismissAll();
        setTimeout(() => {
          this.isSuccess = false;
        }, 3000);
      },
      error: () => {
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 3000);
      }
    });
  }
  open(content: any) {
    this.modalService.open(content);
  }

  deleteUser(id: string): void {
    if (!this.token) {
      return;
    }
    if(confirm('Bạn có chắc chắn muốn xóa không?')) {
      this.userService.deleteUser(id, this.token).subscribe({
        next: () => {
          this.loadUsers();
          this.isSuccess = true;
          this.modalService.dismissAll();
          setTimeout(() => {
            this.isSuccess = false;
          }, 3000);
        },
        error: () => {
          this.isError = true;
          setTimeout(() => {
            this.isError = false;
          }, 3000);
        }
      });
    }else{
      return 
    }
  }

}
