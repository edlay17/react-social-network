

let InitialState = {
    headerLogo: 'https://library.kissclipart.com/20191103/ueq/kissclipart-js-icon-logo-icon-react-icon-174d1b3209c3edf6.png'
    //headerLogo: '././logo.svg'
};

const headerReducer = (state = InitialState, action) => {
    let copyState = {...state};
    return copyState;
}

export default headerReducer;