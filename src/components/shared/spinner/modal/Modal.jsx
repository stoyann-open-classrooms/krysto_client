import React from 'react'
import { useState } from 'react'
import './modal.css'

function Modal( props) {
  const [modal, setModal] = useState(true)
  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>

    
      <button onClick={toggleModal} className="btn-modal">{props.btn}</button>
{!modal ? 
       <> 
      <div onClick={toggleModal} className="overlay-modal">     </div>
        <div className="modal">
          <div className="modal-content">
            <h2>{props.title}</h2>
              {props.children}
            <button
            onClick={toggleModal}
            className='close-modal'>X</button>
          </div>
        </div>
            </>
 
        : ''}
    </>
  )
}

export default Modal
