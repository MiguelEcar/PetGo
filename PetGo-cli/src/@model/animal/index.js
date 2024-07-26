


import watchNewAnimal from './saga/new';
import watchCreateAnimal from './saga/create';
import watchListAnimal from './saga/list';

export const animalSaga = [
    watchNewAnimal(),
    watchCreateAnimal(),
    watchListAnimal(),
]

export * from './actionTypes';
export * from './reducer';
export * from './service';
export * from './entity';
