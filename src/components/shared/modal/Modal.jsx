import React from 'react'

function Modal(props) {
  return (
<>
<button className="button">{props.btn}</button>

    <div class="modal" className={props.isActive ? "modal is-active" : "modal"}>
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{props.titleModal}</p>
        <button class="delete" aria-label="close"></button>
      </header>
        {props.children}
    
    </div>
  </div>
        </>
  )
}

export default Modal