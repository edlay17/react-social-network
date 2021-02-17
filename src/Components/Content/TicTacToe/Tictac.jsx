import React from "react"
import s from "./Tictac.module.css"

function Tictac(props) {
    let allCells = props.cellData.map((value, index) => <Cell isFetching={props.isFetching} setCellChecked={props.setCellCheckedSide} value={value} index={index}/>);

    return (
        <div className={s.wrapper}>
            <h1>TicTacToe</h1>
            {(props.whoCanChecked === 1) && 'you can'}
            {(props.whoCanChecked === 2) && 'please wait...'}
            {(props.whoCanChecked === 3) && 'game over'}
            {(props.whoCanChecked === 3) && <button onClick={() => {props.restartGame()}}>restart</button>}
            <div className={s.block}>
                <div className={s.row}>
                    {allCells}
                </div>
            </div>
        </div>
    );
}

function Cell(props) {
    return(
        <>
            {props.value===null && <div onClick={(!props.isFetching) && (() => {props.setCellChecked(1, props.index)})} className={`${s.cell} ${s.null}`}></div>}
            {props.value===1 && <div className={`${s.cell} ${s.one}`}></div>}
            {props.value===2 && <div className={`${s.cell} ${s.two}`}></div>}
        </>
    );
}

export default Tictac;

