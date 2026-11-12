import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService, Education } from '../../services/resume-data.service';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  education: Education;

  constructor(private resumeData: ResumeDataService) {
    this.education = this.resumeData.education;
  }
}
