import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public SophIAslides = [];
  @ViewChild('mainSlides' ,{static: true}) slides: IonSlides;
  constructor(private router:Router) {}

  ngOnInit(){
    this.SophIAslides = [
      {
        title: "Educação financeira",
        img: "logo",
        desc: "Dicas e segredos revelados pra você aprender a economizar de uma maneira fácil e divertida!",
      },
      {
        title: "Férias o ano todo!",
        img: "pig-praiia",
        //desc: "Sua amiga financeira e inteligente - e gratuita!",
        desc: "Que tal fazer o seu dinheiro trabalhar por você enquanto você tira férias?",
      },
      //{
      //  title: "Bora economizar?",
      //  img: "game",
      //  desc: "Nossa metodologia motiva por meio de games desafiadores e reconhecimentos",
      //},
    ];
  }
  public goBack(){
    this.slides.slidePrev();
  }

  public skipBtn(){
      console.log('I will go to the home tab');
  }

  public goNext(){
    this.slides.slideNext();
    this.router.navigateByUrl('url');
  }
}

