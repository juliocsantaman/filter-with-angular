import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  filterPost = '';
  posts = [
    {
      id: 1,
      title: 'Aprendizaje',
      date: '24/3/2021',
      link: 'https://juliocsantaman.github.io/learning.github.io/'
    },
    {
      id: 2,
      title: 'Equalweb',
      date: '25/3/2021',
      link: 'https://juliocsantaman.github.io/rick-and-morty-api/'
    },
    {
      id: 3,
      title: 'Stackable',
      date: '29/3/2021',
      link: 'https://drive.google.com/file/d/1a5L536BuVSkuLhQY6vWZ25GjvDsIz-u2/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Quizlet',
      date: '31/3/2021',
      link: 'https://juliocsantaman.github.io/flashcard.github.io/'
    },
    {
      id: 5,
      title: 'Wridea',
      date: '31/3/2021',
      link: 'https://juliocsantaman.github.io/flashcard.github.io/'
    },
    {
      id: 6,
      title: 'Whiteboard - Sketchpad',
      date: '5/4/2021',
      link: 'https://drive.google.com/file/d/1qQV3_yuO0auPnh5D_sYOrckG6sVaxb77/view?usp=sharing'
    },
    {
      id: 7,
      title: 'Natural Reader',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1VNrtXNrIYnC50MT8uFxTBM95nDocM_Ne/view?usp=sharing'
    },
    {
      id: 8,
      title: 'FromTextToSpeech',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1VNrtXNrIYnC50MT8uFxTBM95nDocM_Ne/view?usp=sharing'
    },
    {
      id: 9,
      title: 'Sonix',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1_F-jqZapnPgzCTfCkoOYQ-UrgboiQ8RC/view?usp=sharing'
    },
    {
      id: 10,
      title: 'Convertio',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1k8CtKRRiwmbAunPl3WOTy8CV_rHASQT5/view?usp=sharing'
    },
    {
      id: 11,
      title: 'Y2mate',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1k8CtKRRiwmbAunPl3WOTy8CV_rHASQT5/view?usp=sharing'
    },
    {
      id: 12,
      title: 'Watson',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1W55wwIs-xi2JPlfU3JGmSfu5Ccdg9Z8_/view?usp=sharing'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
