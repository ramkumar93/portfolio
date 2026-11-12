import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService, Certification } from '../../services/resume-data.service';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss'
})
export class CertificationsComponent {
  certifications: Certification[];

  constructor(private resumeData: ResumeDataService) {
    this.certifications = this.resumeData.certifications;
  }
}
