import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public dataPostList: any[] = [];
  public cols: any[] = [];
  public totalRecords: number = 0;

  constructor(
    private postService: PostService
  ) {}

  async ngOnInit() {
    await this.initData();
    this.cols = [
      { id: "id", header: 'Id', field: "id", class: 'p-text-center' },
      { id: "userId", header: 'User Id', field: "userId", class: 'p-text-center' },
      { id: "title", header: 'title', field: "title" },
      { id: "body", header: 'body', field: "body" }
    ]
  }

  async initData() {
    try {
      this.postService.initPost().subscribe((res: any) => {
        this.dataPostList = res;
        this.totalRecords = res.length;
      })

    } catch (error) { console.log(error) }
  }

  firstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
