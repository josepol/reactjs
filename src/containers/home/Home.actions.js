import { ADD_PET, DELETE_PET } from './Home.constants';

export const addPet = (pet) => {
    return {
        type: ADD_PET,
        payload: {
            pet
        }
    }
}

export const deletePet = (id) => {
    return {
        type: DELETE_PET,
        payload: {
            id
        }
    }
}