import { Component } from '@angular/core';
import { ArticlesApiService } from '../articles-api.service';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  article: any;
  constructor(public ArticlesApiService: ArticlesApiService) {
    this.getArticle();
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }
  getArticle() {
    this.ArticlesApiService.getArticle().then(data => {
      this.article = data;
      console.log(this.article);
    });
  }
}
