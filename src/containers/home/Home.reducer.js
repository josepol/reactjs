import { TYPE } from './Home.constants'

const initialState = {
    pets: []
};

const homeReducer = (state = initialState, action) => {
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

export default homeReducer