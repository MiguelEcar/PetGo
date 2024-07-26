import { all } from 'redux-saga/effects';

import { langSaga, langReducer } from './lang';
import { animalSaga, animalReducer } from './animal';
import { categorySaga, categoryReducer } from './category';


export default function* rootSaga() {
  yield all([
    ...langSaga,
    ...animalSaga,
    ...categorySaga,
  ])
}

export const rootReducer = {
  langReducer,
  animalReducer,
  categoryReducer,
}

export * from './lang';
export * from './animal';
export * from './category';
