import { Params } from '@angular/router';
import { createAction, props } from '@ngrx/store';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';
import { ActionTypes } from '../actionTypes';

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string; params: Params }>()
);

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponseInterface }>()
);

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);
