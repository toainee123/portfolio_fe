import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-projects',
  imports: [ReactiveFormsModule, FormsModule, CommonModule ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  project: any[] = [];
  addProjectForm: any;
  updateProjectForm: any;
  isSuccess: boolean = false;
  isError: boolean = false;
  token: string | null = null;


  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ){
    // Initialize the project array or fetch from a service
    this.project = [];
  }

  open(content: any) {
    // Logic to open modal for adding a project
    this.modalService.open(content);
  }
  addProject(addProjectForm: any) {}

}
