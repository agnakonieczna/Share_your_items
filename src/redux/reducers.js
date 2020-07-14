import {combineReducers} from "redux";
import { USER_LOGGED, USER_LOGGED_OUT } from "./actions";

const initialUserState = {
    authUser: ""
}

function userReducer(state = initialUserState, action) {
    if(action.type === USER_LOGGED) {
        return {
            ...state,
            authUser: action.payload
        }
    }

    if(action.type === USER_LOGGED_OUT) {
        return {
            ...state,
            authUser: ""
        }
    }
    return state
}

export default combineReducers({
    user: userReducer,
})

// let globalState = {
//     user: {
//         authUser: null
//     }
// }
