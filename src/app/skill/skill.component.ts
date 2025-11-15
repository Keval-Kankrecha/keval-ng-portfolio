import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-skill',
  standalone: false,
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  skillData = [
    {
      category: 'Languages',
      items: [
        { title: 'HTML', icon: 'simpleHtml5', displayValue: 'HTML5' }, // Already done
        { title: 'CSS', icon: 'simpleCss', displayValue: 'CSS3' }, // Added
        {
          title: 'Javascript',
          icon: 'simpleJavascript',
          displayValue: 'JavaScript',
        }, // Added
        { title: 'Python', icon: 'simplePython', displayValue: 'Python' }, // Added
        { title: 'Java', icon: 'bootstrapFiletypeJava', displayValue: 'Java' }, // Added
      ],
    },
    {
      category: 'Frameworks & Databases',
      items: [
        {
          title: 'Node.js',
          icon: 'diNodejsPlainWordmark',
          displayValue: 'Node.js',
        }, // Added
        { title: 'NestJS', icon: 'simpleNestjs', displayValue: 'NestJS' }, // Added
        { title: 'MongoDB', icon: 'simpleMongodb', displayValue: 'MongoDB' }, // Added
        { title: 'MySQL', icon: ' simpleMysql', displayValue: 'MySQL' }, // Added
        { title: 'Angular', icon: 'simpleAngular', displayValue: 'Angular' }, // Added
      ],
    },
    {
      category: 'Tools & Systems',
      items: [
        { title: 'Docker', icon: 'simpleDocker', displayValue: 'Docker' }, // Added
        { title: 'Clickup', icon: 'simpleClickup', displayValue: 'ClickUp' }, // Added
        { title: 'Git', icon: 'simpleGit', displayValue: 'Git' }, // Added
      ],
    },
  ];
}
