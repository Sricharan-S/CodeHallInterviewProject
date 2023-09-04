import { SAVE_MOVIES } from "./actions";

const initState = {
    movies: []
};

function appReducer(state = initState, action){
    switch(action.type){
        case SAVE_MOVIES:
            return {...state, movies: action.payload};
        default:
            return state;
    }
}


export default appReducer;