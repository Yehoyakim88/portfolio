import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  public iconNames : string[] = 
  [
    'Angular', 
    'TypeScript', 
    'JavaScript', 
    'HTML', 
    'Firebase', 
    'GIT', 
    'CSS', 
    'Rest-Api', 
    'Scrum', 
    'Material design'
  ];
}
