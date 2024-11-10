import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import Typed from 'typed.js';
import { locale as english } from '../shared/en';
import { locale as french } from '../shared/fr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }
  ngOnInit(): void {
    var options = {
      strings: ['','Conceptor-Developer', 'Back-End Developer', 'Full-Stack Developer', 'Web Developer','Mobile developer', 'DevOps'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }
}
