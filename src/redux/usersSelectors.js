import {createSelector} from "reselect";


export const getUsersSelector = (state) => {
    return state.users.usersData;
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
        //return users.filter(u => true);
        //debugger;
        return users;
    })

export default getUsersSuperSelector;