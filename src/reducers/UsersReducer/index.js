import {SIGNUP_USER_REQUEST} from "../../actions/userActionTypes";

const initialState = {
    currentUser: {
        fullname: '',
        email: '',
        location: ''
    }
};

function users (state = initialState, action){
    switch (action.type){
        case SIGNUP_USER_REQUEST: {
            return {...state, currentUser:action.payload}
        }
        // case SIGNUP_
        default:{
            return {...state}
        }
    }
}
export default users