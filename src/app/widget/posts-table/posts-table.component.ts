import { Component, OnInit } from '@angular/core';
import {GtConfig} from '@angular-generic-table/core';
import {PostsService} from '../../service/posts.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.less']
})
export class PostsTableComponent implements OnInit {

  public configObject: GtConfig<any>;

  public data: Array<{
    id: number,
    title: string,
    body: string
  }> = [];

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

    this.configObject = {
      settings: [{
        objectKey: 'id',
        sort: 'asc',
        sortOrder: 1,
        columnOrder: 0
      }, {
        objectKey: 'title',
        sort: 'enable',
        columnOrder: 1
      }, {
        objectKey: 'body',
        columnOrder: 2,
        visible: true
      }],
      fields: [{
        name: 'Id',
        objectKey: 'id'
      }, {
        name: 'Title',
        objectKey: 'title'
      }, {
        name: 'Post',
        objectKey: 'body',
        stackedHeading: 'Custom heading'
      }],
      data: posts
    };

  }
}
