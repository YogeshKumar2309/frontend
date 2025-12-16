import React, { useReducer } from 'react'
import { initialStateReduUndo, undoRedoReducer } from '../reducer/undoReduReducer'
import { ReduUndoActionTypes } from '../reducer/undoReduActionType'

const UndoRedo = () => {
    const [ state, dispatch ] = useReducer(undoRedoReducer, initialStateReduUndo)

  return (
    <div className='text-center mt-10'>
        <h2 className='text-2xl font-bold mb-6'>Undo/Redo App</h2>

        <input 
        type="text" 
        value={state.present}
        onChange={(e) => dispatch({type: ReduUndoActionTypes.SET, payload: e.target.value})}
        placeholder='Type Something...'
        className='border p-2 rounded w-1/3'
        />
        <div className='mt-4'>
            <button 
            className='mx-2 px-4 py-2 border rounded bg-blue-100 text-blue-700'
            onClick={() => dispatch({type: ReduUndoActionTypes.UNDO})}
              disabled={state.past.length === 0}
            >
                Undo
            </button>
            <button 
            className='mx-2 px-4 py-2 border rounded bg-green-100 text-green-700'
            onClick={() => dispatch({type: ReduUndoActionTypes.REDO})}
              disabled={state.future.length === 0}
            >
                Redo
            </button>
        </div>


        <div className="mt-20">
                <strong>Past:</strong> {JSON.stringify(state.past)} <br />
            <strong>Present:</strong> {state.present} <br />
            <strong>Future:</strong> {JSON.stringify(state.future)}
               </div>
    </div>
  )
}

export default UndoRedo