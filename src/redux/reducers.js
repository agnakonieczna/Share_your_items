import {combineReducers} from "redux";
import { USER_LOGGED, USER_LOGGED_OUT, ADD_TYPE, ADD_BAGS, ADD_LOCALIZATION, ADD_HELP_GROUPS, ADD_LOCALIZATION_SPECIFIC, ADD_ADDRESS_AND_TIME } from "./actions";

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

const initialFormState = {
    type: "",
    bags: "",
    localization: "",
    helpGroups: [],
    localizationSpecific: "",
    addressAndTime: {
        street: "",
        city: "",
        postCode: "",
        phone:"",
        date:"",
        hour: "",
        note:""
    }
}

function formReducer(state = initialFormState, action) {
    if(action.type === ADD_TYPE) {
        return {
            ...state,
            type: action.payload
        }
    }

    if(action.type === ADD_BAGS) {
        return {
            ...state,
            bags: action.payload
        }
    }

    if(action.type === ADD_LOCALIZATION) {
        return {
            ...state,
            localization: action.payload
        }
    }

    if(action.type === ADD_HELP_GROUPS) {
        return {
            ...state,
            helpGroups: action.payload
        }
    }

    if(action.type === ADD_LOCALIZATION_SPECIFIC) {
        return {
            ...state,
            localizationSpecific: action.payload
        }
    }

    if(action.type === ADD_ADDRESS_AND_TIME) {
        return {
            ...state,
            addressAndTime: action.payload
        }
    }
    
    return state
}

export default combineReducers({
    user: userReducer,
    form: formReducer
})

// let globalState = {
//     user: {
//         authUser: ""
//     },
//     form: {
//         type: "",
//         bags: "",
//         localization: "",
//         helpGroups: [],
//         localizationSpecific: "",
//         addressAndTime: {
//             street: "",
//             city: "",
//             postCode: "",
//             phone:"",
//             date:"",
//             hour: "",
//             note:""
//         }
//     }
// }
