
import {
    NEW_ANIMAL_SUCCESS,
    LIST_ANIMAL_PENDING,
    LIST_ANIMAL_SUCCESS,
    LIST_ANIMAL_FAILURE,
    CREATE_ANIMAL_PENDING,
    CREATE_ANIMAL_SUCCESS,
    CREATE_ANIMAL_FAILURE,
    CHANGE_ANIMAL_STATUS_PENDING,
    CHANGE_ANIMAL_STATUS_SUCCESS,
    CHANGE_ANIMAL_STATUS_FAILURE,
} from './actionTypes';


const initialState = { list: null, loading: false }


function animalReducer(state = initialState, action) {

    switch (action.type) {
        case NEW_ANIMAL_SUCCESS:
            return {
                ...state,
                loading: false,
                oid: action.oid
            }
        case CHANGE_ANIMAL_STATUS_PENDING:
        case LIST_ANIMAL_PENDING:
        case CREATE_ANIMAL_PENDING:
            return {
                ...state,
                loading: true,
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case LIST_ANIMAL_SUCCESS:
            return {
                ...state,
                list: action.list,
                loading: false
            }
        case LIST_ANIMAL_FAILURE:
            return {
                ...state,
                list: null,
                loading: false
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case CHANGE_ANIMAL_STATUS_SUCCESS:
        case CREATE_ANIMAL_SUCCESS:
            return {
                ...state,
                loading: false,
                oid: action.oid
            }
        case CHANGE_ANIMAL_STATUS_FAILURE:
        case CREATE_ANIMAL_FAILURE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export { animalReducer };