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
      title: 'Post uno',
      date: '02/01/2021',
      link: 'https://juliocsantaman.github.io/learning.github.io/'
    },
    {
      id: 2,
      title: 'Post dos',
      date: '05/02/2021',
      link: 'https://juliocsantaman.github.io/learning.github.io/'
    },
    {
      id: 3,
      title: 'Post tres',
      date: '03/03/2021',
      link: 'https://juliocsantaman.github.io/learning.github.io/'
    },
    {
      id: 4,
      title: 'Post cuatro',
      date: '04/04/2021',
      link: 'https://juliocsantaman.github.io/learning.github.io/'
    },
    {
      id: 5,
      title: 'Post cinco',
      date: '08/05/2021',
      link: 'https://juliocsantaman.github.io/learning.github.io/'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
