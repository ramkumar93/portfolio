import { Injectable } from '@angular/core';

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  gpa: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  icon: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  readonly name = 'Ramkumar Ketti Moorthy';
  readonly title = 'Lead Full Stack Engineer';
  readonly location = 'Dallas, TX';
  readonly email = 'kmramkumar210@gmail.com';
  readonly linkedin = 'linkedin.com/in/ramkumarkm';
  readonly linkedinUrl = 'https://linkedin.com/in/ramkumarkm';

  readonly summary = `Full Stack Engineer with 11+ years of experience designing and delivering scalable,
high-performance frontend and backend solutions. Proficient in Java, Spring Boot, Node.js, Angular, React,
and Python, with deep expertise in REST APIs, cloud platforms (Google Cloud, AWS), and event-driven
distributed microservices. Harnessed AI-assisted tools to cut development time by 60%, while consistently
driving performance, scalability, and reliability at enterprise scale.`;

  readonly stats: Stat[] = [
    { value: '11+', label: 'Years Experience' },
    { value: '10+', label: 'Microservices Built' },
    { value: '99.9%', label: 'Uptime Achieved' },
    { value: '60%', label: 'Dev Time Saved' }
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C#', 'Kotlin']
    },
    {
      category: 'AI Tools',
      skills: ['Claude Code', 'Codex', 'GitHub Copilot']
    },
    {
      category: 'Web Technologies',
      skills: ['Angular', 'React', 'Bootstrap', 'jQuery', 'Angular Material', 'Material UI', 'HTML5', 'CSS3']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Spring', 'Spring Boot', 'Hibernate', 'Spring Data JPA', 'J2EE Web Services', 'Microservices', '.Net', 'JBoss Fuse']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['Google Cloud', 'AWS', 'OpenShift', 'Terraform', 'Docker', 'Kubernetes', 'Azure DevOps', 'Jenkins', 'CI/CD']
    },
    {
      category: 'Databases',
      skills: ['SQL', 'Oracle', 'MS SQL Server', 'IBM DB2', 'Google Datastore', 'SSMS']
    },
    {
      category: 'Tools & Others',
      skills: ['REST/SOAP', 'Agile', 'JUnit', 'Dynatrace', 'Splunk', 'Kafka', 'GraphQL', 'IntelliJ', 'Eclipse', 'VS Code', 'GitHub', 'Maven', 'Apache Tomcat', 'Nginx', 'SonarQube', 'Figma']
    }
  ];

  readonly experiences: Experience[] = [
    {
      company: 'IBM',
      role: 'Lead Software Engineer',
      period: 'Feb 2019 – Present',
      location: 'Dallas, Texas',
      current: true,
      bullets: [
        'Architected and shipped 10+ scalable backend microservices in Java + Spring Boot, powering enterprise-scale APIs serving millions of requests per day with 99.9% uptime',
        'Owned end-to-end development of backend features including API design, caching strategies, and database optimization, improving system scalability and reducing latency',
        'Enhanced backend performance by implementing caching frameworks, reducing database I/O by ~60% and achieving 40–50% faster response times in high-traffic production environments',
        'Partnered with Product Managers, Designers, and Frontend Engineers to conceptualize features with a user-first approach, ensuring seamless integrations across client and backend systems',
        'Engineered cloud-native applications on Google Cloud and AWS with automated provisioning via Terraform, enabling faster, cost-efficient deployments',
        'Built REST APIs and integrations with external platforms, enabling secure, real-time data synchronization across multiple applications',
        'Mentored 5 junior developers, conducted peer code reviews, and improved team coding standards and system health',
        'Led Angular modernization initiative, producing 20+ reusable UI components that reduced frontend development time by 25% across future product features',
        'Strengthened production systems by remediating critical security vulnerabilities, optimizing Jenkins and GitLab CI/CD pipelines and reducing average build-to-deploy cycle time by 40%'
      ]
    },
    {
      company: 'TRANSCENTRA FTS',
      role: 'Software Engineer',
      period: 'Jan 2017 – Jan 2019',
      location: 'Chennai, India',
      current: false,
      bullets: [
        'Adopted Angular in migrating a legacy application from JSP/JSTL to a modern frontend framework',
        'Engineered Angular feature modules (lazy loading, reactive forms, interceptors) that improved application responsiveness and reduced user-reported UI bugs by 35%',
        'Developed robust web services to facilitate efficient communication between client and server, reinforcing a distributed microservices approach',
        'Resolved cross-browser compatibility and alignment issues across Chrome, Firefox, Safari, and IE11, achieving consistent UI rendering across 95% of target browser/device combinations',
        'Utilized Maven and Tomcat for efficient build processes and deployment, supporting CI/CD workflows'
      ]
    },
    {
      company: 'FULL CREATIVE',
      role: 'Java Developer',
      period: 'Nov 2015 – Dec 2016',
      location: 'Chennai, India',
      current: false,
      bullets: [
        'Gained full-stack expertise across Java, Spring, Backbone, and cloud fundamentals, transitioning immediately into a contributing developer role',
        'Seamlessly integrated 3 third-party services via OAuth 2.0, ensuring smooth authentication and data interchange',
        'Developed and deployed an email notification system that automated user activity alerts, reducing manual follow-up overhead by 20%',
        'Launched a To-Do list web application using Backbone.js, jQuery, Google App Engine, and Google Datastore — completed end-to-end as a solo project within 4 weeks'
      ]
    }
  ];

  readonly education: Education = {
    institution: 'Madurai Institute of Engineering & Technology',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Engineering',
    gpa: '7.59 / 10',
    year: '2015'
  };

  readonly certifications: Certification[] = [
    {
      name: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      icon: '☁️',
      color: '#FF9900'
    },
    {
      name: 'Google Certified Associate Cloud Engineer',
      issuer: 'Google Cloud',
      icon: '🌐',
      color: '#4285F4'
    },
    {
      name: 'Red Hat Certified Specialist in Containers',
      issuer: 'Red Hat',
      icon: '🎩',
      color: '#EE0000'
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft Azure',
      icon: '⚡',
      color: '#0078D4'
    }
  ];
}
