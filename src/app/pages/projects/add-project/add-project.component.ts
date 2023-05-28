import { Component, EventEmitter, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs';
import { Project } from 'src/app/Project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  @Output() onAddProject: EventEmitter<Project> = new EventEmitter();
  name!: string;
  description!: string;
  link!: string;
  showAddProject: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddProject = value));
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a Project!');
      return;
    }

    const newProject = {
      name: this.name,
      description: this.description,
      link: this.link,
    };

    this.onAddProject.emit(newProject);

    this.name = '';
    this.description = '';
    this.link = '';
  }

  reloadCurrentPage() {
    if (this.name){
      window.location.reload();
    }
   }

}
