import { getAllUsers } from '../services/userService'

export const getUsersFromServer = ({ dispatch, getState }) => next => action => {
    async function getUsers() {
        const users = await getAllUsers();
        dispatch(action.setAll(users))
    }
    if (action.type === 'GET_ALL_USERS') {
        try {
            getUsers();
            debugger;
        } catch (err) {
            console.log(err);
        }
    }
    return next(action)
}

