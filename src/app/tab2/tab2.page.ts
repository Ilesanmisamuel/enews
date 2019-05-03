import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  data: any; 
  constructor(private newsService: NewsService, private router: Router){}

  ngOnInit(){
    this.newsService.getData('top-headlines?country=us&category=sport')
    .subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
  onGoToNewsSinglePage(article){
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
    
  }
}
