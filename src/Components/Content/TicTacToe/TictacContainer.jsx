import React from "react"
import Tictac from "./Tictac";
import {connect} from "react-redux";
import {setCellCheckedSide, restartGame} from "../../../redux/tictacReducer";

const mapStateToProps = (state) => {
    return{
        cellData: state.tictac.tictacElements,
        isFetching: state.tictac.isFetching,
        whoCanChecked: state.tictac.whoCanChecked
    }
}

export default connect(mapStateToProps, {
    setCellCheckedSide,
    restartGame
})(Tictac)