import { TYPE } from './Actions.constants';

export const addPet = (pet) => {
    return {
        type: TYPE,
        payload: {
            pet: pet
        }
    }
}