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
      img: 'https://neuro-class.com/wp-content/uploads/2019/12/Portada-Estilos-de-aprendizaje-NeuroClass.jpg',
      title: 'Aprendizaje',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '24/3/2021',
      link: 'https://juliocsantaman.github.io/learning.github.io/'
    },
    {
      id: 2,
      img: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_65c8afe9a5d95289eb0d2b7e84703ace/equalweb.jpg',
      title: 'Equalweb',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '25/3/2021',
      link: 'https://juliocsantaman.github.io/rick-and-morty-api/'
    },
    {
      id: 3,
      img: 'https://cdn.shopify.com/app-store/listing_images/869261b03e8f1272e5f169e5ba48a5b7/banner/CIjE/bH0lu8CEAE=.jpg',
      title: 'Stackable',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '29/3/2021',
      link: 'https://drive.google.com/file/d/1a5L536BuVSkuLhQY6vWZ25GjvDsIz-u2/view?usp=sharing'
    },
    {
      id: 4,
      img: 'https://lh3.googleusercontent.com/6BfFDIrzID2s0Mb8dv3zVoVSqHg5SlFQee0_pbnVROLs-y30FiOT3Gvmq5JVXHjS-iI=w720-h310',
      title: 'Quizlet',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '31/3/2021',
      link: 'https://juliocsantaman.github.io/flashcard.github.io/'
    },
    {
      id: 5,
      img: 'https://149362262.v2.pressablecdn.com/wp-content/uploads/2020/06/persona-que-tiene-ideas-como-metafora-bombillas_23-2148342812.jpg',
      title: 'Wridea',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '31/3/2021',
      link: 'https://juliocsantaman.github.io/ideas.github.io/'
    },
    {
      id: 6,
      img: 'https://parapnte.educacion.navarra.es/wp-content/uploads/2017/01/sketchpad.png',
      title: 'Whiteboard - Sketchpad',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '5/4/2021',
      link: 'https://drive.google.com/file/d/1qQV3_yuO0auPnh5D_sYOrckG6sVaxb77/view?usp=sharing'
    },
    {
      id: 7,
      img: 'https://play-lh.googleusercontent.com/d5l8GHy5-BsP3h5Gd5y6YYUvZAx3ydKUUIdp-Bl50GUpAgpiB_18jqco1ZEqZAOjHaQ',
      title: 'Natural Reader',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1VNrtXNrIYnC50MT8uFxTBM95nDocM_Ne/view?usp=sharing'
    },
    {
      id: 8,
      img: 'https://i.ytimg.com/vi/s89YJOeTaAI/maxresdefault.jpg',
      title: 'FromTextToSpeech',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1VNrtXNrIYnC50MT8uFxTBM95nDocM_Ne/view?usp=sharing'
    },
    {
      id: 9,
      img: 'https://sonix.ai/sonix-logo.png',
      title: 'Sonix',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1_F-jqZapnPgzCTfCkoOYQ-UrgboiQ8RC/view?usp=sharing'
    },
    {
      id: 10,
      img: 'https://i.pinimg.com/originals/8d/22/a3/8d22a37b7bbab8ed2317186cd987108a.jpg',
      title: 'Convertio',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1k8CtKRRiwmbAunPl3WOTy8CV_rHASQT5/view?usp=sharing'
    },
    {
      id: 11,
      img: 'https://www.mundocuentas.com/wp-content/uploads/2020/04/mundocuentas-descargar-videos-youtube-sitios006-440x400.png',
      title: 'Y2mate',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1k8CtKRRiwmbAunPl3WOTy8CV_rHASQT5/view?usp=sharing'
    },
    {
      id: 12,
      img: 'https://cdn4.josefacchin.com/wp-content/uploads/2020/03/transcribir-audio-a-texto.png',
      title: 'Watson',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/1W55wwIs-xi2JPlfU3JGmSfu5Ccdg9Z8_/view?usp=sharing'
    },
    {
      id: 13,
      img: 'https://pbs.twimg.com/profile_images/1369738231818948612/itST8ezt_400x400.jpg',
      title: '7Taps',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus porro laborios',
      date: '21/6/2021',
      link: 'https://drive.google.com/file/d/12INRJ1fpgPB1wcDEwsDsSbzi2KegOso6/view?usp=sharing'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
