const SET_CELL_CHECKED = 'setCellChecked';
const IS_CELLS_FETCHING = 'isCellsFetching';
const WHO_CAN_CHECKED = 'whoCanChecked';
const RESTART_GAME = 'restartGame';

const setCellChecked = (player, cellNum) => ({
    type: SET_CELL_CHECKED,
    player,
    cellNum
})
const isCellsFetching = (toggleFetching) => ({
    type: IS_CELLS_FETCHING,
    toggleFetching
})
const whoCanChecked = (toggleCan) => ({
    type: WHO_CAN_CHECKED,
    toggleCan
})
export const restartGame = () => ({
    type: RESTART_GAME
})


export const setCellCheckedSide = (player, cellNum) => (dispatch) => {
    dispatch(setCellChecked(player,cellNum));
    dispatch(whoCanChecked(2));
    dispatch(isCellsFetching(true));
    let randomCell = Math.floor(Math.random() * (8 - 0 + 1));
    setTimeout(() => {
        dispatch(setCellChecked(2,randomCell));
        dispatch(isCellsFetching(false));
        dispatch(whoCanChecked(1));
        },3000);
}

let InitialState = {
    tictacElements: [
        null, null, null,
        null, null, null,
        null, null, null
    ],
    cellOfFirstPlayer: [],
    cellOfSecondPlayer: [],
    countOfChecked: 0,
    isFetching: false,
    whoCanChecked: 1
}

// ПОСЛЕ GAME OVER ПРИ БЫСТРОМ РЕСТАРТЕ КРАСНЫЙ КВАДРАТ СТАВИТСЯ

const tictacReducer = (state = InitialState, action) => {
    let copyState = {...state};
    switch(action.type){
        case SET_CELL_CHECKED:
            if(state.countOfChecked === 9)return copyState;
            copyState.tictacElements = [...state.tictacElements];
            copyState.tictacElements[action.cellNum] = action.player;
            if(action.player===1)copyState.cellOfFirstPlayer = [...state.cellOfFirstPlayer, action.cellNum];
            else if(action.player===2)copyState.cellOfSecondlayer = [...state.cellOfSecondPlayer, action.cellNum];
            copyState.countOfChecked = state.countOfChecked + 1;
            return copyState;
            break;
        case IS_CELLS_FETCHING:
            copyState.isFetching = action.toggleFetching;
            return copyState;
            break;
        case WHO_CAN_CHECKED:
            if(state.countOfChecked === 9)copyState.whoCanChecked = 3;
            else copyState.whoCanChecked = action.toggleCan;
            return copyState;
            break;
        case RESTART_GAME:
            copyState.tictacElements = [null,null,null,null,null,null,null,null,null];
            copyState.cellOfFirstPlayer = [];
            copyState.cellOfSecondlayer = [];
            copyState.countOfChecked = 0;
            copyState.isFetching = false;
            copyState.whoCanChecked = 1;
            return copyState;
            break;
        default: return copyState;
    }
}

test

export default tictacReducer;