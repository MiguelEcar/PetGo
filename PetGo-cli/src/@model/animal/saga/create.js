import { takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { createAnimal } from '../service';
import {
  CREATE_ANIMAL,
  CREATE_ANIMAL_PENDING,
  CREATE_ANIMAL_SUCCESS,
  CREATE_ANIMAL_FAILURE
} from '../actionTypes';


function* sagaCreateAnimal(action) {
  yield put({ type: CREATE_ANIMAL_PENDING })

  try {

    const newOid = yield call(createAnimal, action.data);

    yield put({ type: CREATE_ANIMAL_SUCCESS, oid: newOid });

    toast('Success!', { type: 'success', position: 'top-right' });

  } catch (error) {
    yield put({ type: CREATE_ANIMAL_FAILURE })

    toast('Error!', { type: 'error', position: 'top-right' });
  }

}

export default function* watchCreateAnimal() {
  yield takeLatest(CREATE_ANIMAL, sagaCreateAnimal)
}
