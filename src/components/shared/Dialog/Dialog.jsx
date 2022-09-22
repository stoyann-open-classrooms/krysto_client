import { useState } from 'react'
import { FaCross, FaPlus, FaTimes } from 'react-icons/fa'
import "./dialog.css"


function Dialog({ btn, children, addIcone }) {
  const [modal, setModal] = useState(true)

  const toogleModal = (e) => {
    setModal(!modal)
  }

  return (
    <>
      <button  onClick={toogleModal}>
       

        {btn}
      </button>
      {!modal ? (
        <div className="modal-overlay" onClick={toogleModal}>
          <div className="modal">
            <button 
       
              onClick={toogleModal}
              className="close-Modal"
            >
              <FaTimes/>
            </button>
            <div className="dialog_form">
            
              {children}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Dialog
