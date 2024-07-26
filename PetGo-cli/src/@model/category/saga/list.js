import { takeLatest, put, call } from 'redux-saga/effects';

import { listCategory } from '../service';
import {
  LIST_CATEGORY,
  LIST_CATEGORY_PENDING,
  LIST_CATEGORY_SUCCESS,
  LIST_CATEGORY_FAILURE
} from '../actionTypes';

function* sagaListCategory(action) {
  yield put({ type: LIST_CATEGORY_PENDING })

  try {

    const list = yield call(listCategory)

    yield put({ type: LIST_CATEGORY_SUCCESS, list: list })

  } catch (error) {

    yield put({ type: LIST_CATEGORY_FAILURE })

  }
}

export default function* watchListCategory() {
  yield takeLatest(LIST_CATEGORY, sagaListCategory)
}