import produce from 'immer';
import createReducer from './ReducerUtils';
import { register,getAllUsers } from '../services/userService'

const initialState = {
    allUsers: [],
    newUser: { name: "full name", age: "age", city: "city", email: "email", phone: "phone" }
}

const userFunc = {
    addUser(state, action) {
        state.newUser = (action.payload);
        const respons = reg(action.payload)
        debugger
        alert(respons)
        async function reg(user) {
            return await register(user)
        }
    },
    setAll(state, action) {
        state.allUsers = (action.payload);
        async function getUsers() {
            const users = await getAllUsers();
           
        }
        try {
            getUsers();
            debugger;
        } catch (err) {
            console.log(err);
        }
    }

   
};
export default produce((state, action) => createReducer(state, action, userFunc), initialState);
