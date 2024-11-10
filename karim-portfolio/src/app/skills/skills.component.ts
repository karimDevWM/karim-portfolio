import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/en';
import { locale as french } from '../shared/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[
      {name:"C#",percent:70, remark:'good'}, 
      {name:"TypeScript",percent:70, remark:'good'}, 
      {name:"Java",percent:55, remark:'average'},
      {name:"PHP",percent:70,remark:'good'},
      {name:"Python",percent:70,remark:'good'},

      {name: ".Net core 6 / 7", percent:70, remark:'good'}, 
      {name: "NestJS", percent:70, remark:'good'}, 
      {name: "Spring boot", percent:55, remark:'average'}, 
    ],
    tools:[{name:"Git",percent:90,remark:'excellent'},{name:"Office",percent:90,remark:'excellent'},{name:"Linux, Windows",percent:70,remark:'very-good'},{name:"MySql, PgSql",percent:90,remark:'excellent'},{name:"Docker, Kubernetes",percent:50,remark:'average'}],
    methodologies:[{name:"Scrum",percent:70,remark:'very-good'},{name:"Uml",percent:90,remark:'excellent'},{name:"Disign Thinking",percent:70,remark:'good'},{name:"TDD",percent:90,remark:'excellent'},{name:"DevOps",percent:50,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}