
import {
    LIST_CATEGORY_PENDING,
    LIST_CATEGORY_SUCCESS,
    LIST_CATEGORY_FAILURE,
} from './actionTypes';


const initialState = { list: null, loading: false }


function categoryReducer(state = initialState, action) {

    switch (action.type) {
        case LIST_CATEGORY_PENDING:
            return {
                ...state,
                loading: true,
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case LIST_CATEGORY_SUCCESS:
            return {
                ...state,
                list: action.list,
                loading: false
            }
        case LIST_CATEGORY_FAILURE:
            return {
                ...state,
                list: null,
                loading: false
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        default:
            return state
    }
}

export { categoryReducer };