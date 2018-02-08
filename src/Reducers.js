import { TYPE } from './Actions.constants';
import { combineReducers } from 'redux'

const initialState = {
    pets: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TYPE:
        return {
            pets: [
                ...state.pets,
                {
                    id: action.payload.pet.id,
                    name: action.payload.pet.name
                }
            ]
        };
        default:
        return state;
    }
}

export default combineReducers({
    reducer
});