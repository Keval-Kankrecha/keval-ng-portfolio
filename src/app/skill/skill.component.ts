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
        { title: 'HTML', icon: 'simpleHtml5' },
        { title: 'CSS', icon: 'simpleCss' },
        { title: 'Javascript', icon: 'simpleJavascript' },
        { title: 'Python', icon: 'simplePython' },
        { title: 'Java', icon: 'bootstrapFiletypeJava' },
      ],
    },
    {
      category: 'Frameworks & Databases',
      items: [
        { title: 'Node.js', icon: 'diNodejsPlainWordmark' },
        { title: 'NestJS', icon: 'simpleNestjs' },
        { title: 'MongoDB', icon: 'simpleMongodb' },
        { title: 'MySQL', icon: ' simpleMysql' },
        { title: 'Angular', icon: 'simpleAngular' },
      ],
    },
    {
      category: 'Tools & Systems',
      items: [
        { title: 'Docker', icon: 'simpleDocker' },
        { title: 'Clickup', icon: 'simpleClickup' },
        { title: 'Git', icon: 'simpleGit' },
      ],
    },
  ];
}
