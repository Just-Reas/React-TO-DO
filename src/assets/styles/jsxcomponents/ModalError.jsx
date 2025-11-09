const ModalError = () =>{
    return(
        <div className="modal" id="modal">
          <div className="modal__header">ERROR</div>
          <div className="modal__text" id="modal-text"></div>
          <button className='modal__button' >Close</button>
        </div>
    )
}

export default ModalError