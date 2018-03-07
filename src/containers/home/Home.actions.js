import { TYPE } from './Home.constants';

export const addPet = (pet) => {
    return {
        type: TYPE,
        payload: {
            pet: pet
        }
    }
}