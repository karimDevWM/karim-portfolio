import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { TranslateService } from '@ngx-translate/core';
import { locale as english } from '../shared/en';
import { locale as french } from '../shared/fr';
import { projectsEn} from '../api/projectsEn';
import { projectsFr} from '../api/projectsFr';
import { MatDialog } from '@angular/material/dialog';
import { data } from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  hover = false;
  projects:any[]=projectsEn;

  constructor(
    private _translationLoaderService: TranslationLoaderService,
    private _translateService: TranslateService,
    private dialog: MatDialog
  ) {
    this._translationLoaderService.loadTranslations(english, french);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.projects=projectsEn;
      }
      else{
        this.projects=projectsFr;
      }
    });
  }

  ngOnInit(): void {
    
  }

  selectedCategory = "";

  get uniqueCategories() {
    return [...new Set(this.projects.map(project => project.category))];
  }

  get filteredProjects() {
    return this.selectedCategory
      ? this.projects.filter(project => project.category === this.selectedCategory)
      : this.projects;
  }

  // ngAfterViewInit(){
  //   console.log("after view init");
  //   this.onMouse("portfolio-link", "portfolio-img");
  //   this.onMouse("bookSocialNetworkFront-link", "teamTraveler-img");
  //   this.onMouse("mautic-link", "mautic-img");
  //   this.onMouse("pokedex-link", "pokedex-img");
  //   this.onMouse("riddle-link", "riddle-img");
  //   this.venobox = $('.venobox');
  //   this.venobox.venobox();
  // }

  detailOnClick(project: any) {
    this.projects.filter(item=>item.detailIsDisplayed && item.id!=project.id).map(elem=>elem.detailIsDisplayed=false);
    project.detailIsDisplayed=!project.detailIsDisplayed;
  }



  // onMouse(idLink: String, idImage: String) {
  //   $('#' + idLink).on("mouseenter", function () {
  //     console.log('on mouseenter');
  //     $('#' + idImage).css("opacity", "0.3");
  //     $('#' + idLink).css("opacity", "1");
  //   }).on('mouseleave', function () {
  //     $('#' + idImage).css("opacity", "1");
  //     $('#' + idLink).css("opacity", "0");
  //   }
  //   );

  //   $('#' + idImage).on("mouseenter", function () {
  //     $('#' + idImage).css("opacity", "0.3");
  //     $('#' + idLink).css("opacity", "1");
  //   }).on('mouseleave', function () {
  //     $('#' + idImage).css("opacity", "1");
  //     $('#' + idLink).css("opacity", "0");
  //   }
  //   );
  // }
}