import { Component, inject } from '@angular/core';
import { Experiences } from '../../service/serviceExp/experiences';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Validators, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-exp-maangerment',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './exp-maangerment.html',
  styleUrl: './exp-maangerment.css'
})
export class ExpMaangerment {
    exp: any[] = [];
    isSuccess: boolean = false;
    isError: boolean = false;
    token: string | null = null;
    expById: any;
    item: any;
    updateExpForm: any;


    constructor(
      private expService: Experiences,
      private modalService: NgbModal,
      private router: Router,
      private fb: FormBuilder
    ){
      const getToken = localStorage.getItem('token');
      if (!getToken) {
        this.router.navigate(['/login']);
      }
      this.token = getToken;
      this.getAllExp();
    }
    // Form for updating experience
    
    ngOnInit(): void {
      this.getAllExp();
      this.updateExpForm = this.fb.group({
        companyName: ['', Validators.required],
        position: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        description: ['', Validators.required]
      });
      
    }
    toYMD(date: Date): string {
      const d = new Date(date);
      return d.toISOString().split('T')[0];
    }

    open(content: any){
      this.modalService.open(content);
    }


    getAllExp(){
      this.expService.getAllExperiences().subscribe({
        next: (res: any) => {
          this.exp = res.experiences;
          console.log(this.exp);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
    
    deleteExp(id: string){
      console.log('id', id)
      console.log('token', this.token)
      if (!this.token) {
        return;
      }
      this.expService.deleteExperience(id, this.token).subscribe({
        next: () => {
          this.getAllExp();
          this.isSuccess = true;
          setTimeout(() => {
            this.isSuccess = false;
          }, 3000);
        },
        error: (err: any) => {
          console.error(err);
          this.isError = true;
          setTimeout(() => {
            this.isError = false;
          }, 3000);
        }
      })
    }
    addExp(form: NgForm){
      console.log('form', form.value);
      if (form.invalid) {
        return;
      }
      if (!this.token) {
        return;
      }
      this.expService.createExperience(form.value, this.token).subscribe({
        next: () => {
          // refresh list
          this.getAllExp();
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
    openFormUpdate(updateExpContent: any, item: any,){
      console.log('item', item);
      this.modalService.open(updateExpContent);
      const getOne = this.expService.getExperienceById(item, this.token!);
      getOne.subscribe({
        next: (res: any) => {
          this.expById = res.experience;
          this.updateExpForm.patchValue({
            companyName: this.expById.companyName ?? '',
            position: this.expById.position ?? '',
            startDate: this.toYMD(this.expById.startDate),
            endDate:   this.toYMD(this.expById.endDate),
            description: this.expById.description ?? ''
    });
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
    

    updateExp(id: string, data: any){
      console.log('id', id);
      const dataForm = this.updateExpForm.value;
      if(this.token){
        this.expService.updateExperience(id, dataForm, this.token).subscribe({
          next: () => {
            this.getAllExp();
            this.isSuccess = true;
            this.modalService.dismissAll();
            setTimeout(() => {
              this.isSuccess = false;
            }, 3000);
          },
          error: (err: any) => {
            console.error(err);
            this.isError = true;
            setTimeout(() => {
              this.isError = false;
            }, 3000);
          }
        });
      }
      
    }
}
