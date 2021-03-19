import * as actionType from '../actionType';

const initialState = {
    airlines: []
}

const reducer = (state = initialState, action : any) => {
    const { type, payload } = action;
    switch (type) {
        case actionType.GET_ALL_AIRLINES:
            return {
                ...state,
                airlines: payload
            }
        default:
            return state
    }
}

export default reducer;

