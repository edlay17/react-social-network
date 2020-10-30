let InitialState = {
    footerCopyright: 'edlayweb@gmail.com'
};

const footerReducer = (state = InitialState, action) => {
    let copyState = {...state};
    return copyState;
}

export default footerReducer;