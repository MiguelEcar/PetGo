import { takeLatest, put, call } from 'redux-saga/effects';

import { listAnimal } from '../service';
import {
  LIST_ANIMAL,
  LIST_ANIMAL_PENDING,
  LIST_ANIMAL_SUCCESS,
  LIST_ANIMAL_FAILURE
} from '../actionTypes';

function* sagaListAnimal(action) {
  yield put({ type: LIST_ANIMAL_PENDING })

  try {

    const list = yield call(listAnimal)

    yield put({ type: LIST_ANIMAL_SUCCESS, list: list })

  } catch (error) {

    yield put({ type: LIST_ANIMAL_FAILURE })

  }
}

export default function* watchListAnimal() {
  yield takeLatest(LIST_ANIMAL, sagaListAnimal)
}