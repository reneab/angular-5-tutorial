import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private data: DataService) {
    this.posts = [];
  }

  ngOnInit() {
    this.data.getPosts().subscribe(p => p.forEach(el => {
      console.log('Got post: ' + el.title);
      this.posts.push(el);
    }));
  }

}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
