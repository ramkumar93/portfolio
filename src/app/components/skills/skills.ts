import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService, SkillCategory } from '../../services/resume-data.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[];

  constructor(private resumeData: ResumeDataService) {
    this.skillCategories = this.resumeData.skillCategories;
  }
}
