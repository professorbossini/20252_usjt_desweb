// rafce
import React from 'react'

const Feedback = ({textoOK, textoNOK, funcaoOK, funcaoNOK}) => {
  return (
    <div className='d-flex justify-content-evenly'>
      {/* button[type=button].btn.btn-*2 */}
      <button 
        type="button"
        onClick={funcaoOK} 
        className="btn btn-primary">
          {textoOK}
      </button>
      <button 
        type="button"
        onClick={funcaoNOK} 
        className="btn btn-danger">
          {textoNOK}
      </button>
    </div>
  )
}

export default Feedback