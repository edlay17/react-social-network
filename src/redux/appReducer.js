import {authMe} from "./authReducer";

const INITIALIZED_SUCCESS = 'initializedSuccess';

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
})

let InitialState = {
    initialized: false
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());
    promise.then(() => {
        dispatch(initializedSuccess());
    })
}

export const appReducer = (state = InitialState, action) => {
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
            break;
        default: return {...state}
    }
}
export default appReducer;
