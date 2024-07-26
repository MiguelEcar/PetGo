import { takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { changeAnimalStatus } from '../service';
import {
  CHANGE_ANIMAL_STATUS,
  CHANGE_ANIMAL_STATUS_PENDING,
  CHANGE_ANIMAL_STATUS_SUCCESS,
  CHANGE_ANIMAL_STATUS_FAILURE
} from '../actionTypes';


function* sagaChangeAnimalStatus(action) {
  yield put({ type: CHANGE_ANIMAL_STATUS_PENDING })

  try {

    const newOid = yield call(changeAnimalStatus, action.data);

    yield put({ type: CHANGE_ANIMAL_STATUS_SUCCESS, oid: newOid });

    toast('Success!', { type: 'success', position: 'top-right' });

  } catch (error) {
    yield put({ type: CHANGE_ANIMAL_STATUS_FAILURE })

    toast('Error!', { type: 'error', position: 'top-right' });
  }

}

export default function* watchChangeAnimalStatus() {
  yield takeLatest(CHANGE_ANIMAL_STATUS, sagaChangeAnimalStatus)
}
