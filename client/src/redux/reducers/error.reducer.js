
import { GET_USER_ERRORS } from "../actions/user.actions";

const initialState = { userError: [], postError : {}}
 
export default function errorReducer(state = initialState, action) {
    switch( action.type){
        
        case GET_USER_ERRORS:
            return{
                userError: action.payload,
                postError: []
            }
            default:
                return state
    }
}