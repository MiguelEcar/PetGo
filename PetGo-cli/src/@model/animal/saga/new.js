import { takeLatest, put } from 'redux-saga/effects';

import {
  animal,
  NEW_ANIMAL,
  NEW_ANIMAL_SUCCESS,
} from '@model';

function* sagaNewAnimal(action) {

  yield put({ type: NEW_ANIMAL_SUCCESS, oid: animal.newOid });

}

export default function* watchNewAnimal() {
  yield takeLatest(NEW_ANIMAL, sagaNewAnimal)
}
