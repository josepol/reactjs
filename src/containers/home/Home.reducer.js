import { ADD_PET, DELETE_PET } from './Home.constants'

const initialState = {
    pets: []
}

const homeReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case ADD_PET:
            return {
                pets: [
                    ...state.pets,
                    {
                        id: action.payload.pet.id,
                        name: action.payload.pet.name
                    }
                ]
            }
        case DELETE_PET:
            return {
                pets: state.pets.filter(p => p.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default homeReducer