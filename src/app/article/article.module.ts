import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './components/article/article.component';
import { SharedArticleService } from '../shared/services/sharedArticle.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { reducers } from './store/reducers';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
import { RouterModule, Routes } from '@angular/router';
import { TagListModule } from '../shared/modules/tagList/tagList.module';
import { ArticleService } from './services/article.service';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';

const routes: Routes = [
  { path: 'articles/:slug', component: ArticleComponent },
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
