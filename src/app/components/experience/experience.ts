import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService, Experience } from '../../services/resume-data.service';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experiences: Experience[];

  constructor(private resumeData: ResumeDataService) {
    this.experiences = this.resumeData.experiences;
  }
}
