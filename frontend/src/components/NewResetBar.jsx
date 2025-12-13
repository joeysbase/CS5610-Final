import React, { useContext } from 'react'
import { SudokuContext } from '../sudoku/SudokuContext'

export default function NewResetBar(){
const { state, dispatch } = useContext(SudokuContext)
const size = state.size || 9
const reset = () => dispatch({ type: 'RESET' })

const handleSubmit = () => {
        alert('Incorrect, keep trying!');
    };

return (
<div style={{display:'flex', gap:8, marginTop:12}}>
<button className="button" onClick={handleSubmit}>Submit</button>
<button className="button button--ghost" onClick={reset}>Reset</button>
</div>
)
}