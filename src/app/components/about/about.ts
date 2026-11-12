import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService, Stat } from '../../services/resume-data.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  stats: Stat[];
  summary: string;

  constructor(private resumeData: ResumeDataService) {
    this.stats = this.resumeData.stats;
    this.summary = this.resumeData.summary;
  }
}
