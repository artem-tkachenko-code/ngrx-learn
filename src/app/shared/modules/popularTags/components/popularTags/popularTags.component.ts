import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { getPopularTagsAction } from '../../store/actions/getPopularTags.action';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-popularTags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues() {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  fetchData() {
    this.store.dispatch(getPopularTagsAction());
  }
}
