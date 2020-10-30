let InitialState = {
    headerLogo: 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'
};

const headerReducer = (state = InitialState, action) => {
    let copyState = {...state};
    return copyState;
}

export default headerReducer;