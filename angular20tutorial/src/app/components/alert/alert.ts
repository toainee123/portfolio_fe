import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {

  isShowSuccess: boolean = false;
  isSuccess: boolean = false;

  showSuccess(isSuccess: boolean) {
    this.isSuccess = true
    setTimeout(() => {
      this.isSuccess = false;
    }, 3000);
  }
  
}
