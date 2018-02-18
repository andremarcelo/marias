import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../service/posts.service';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.less']
})
export class PostsViewComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getAllPosts().subscribe(
      posts => this.loadTable(posts)
    );
  }

  loadTable(posts) {
    console.log(posts);

  }

}
