import React, {useContext} from 'react'
import ModalContext from '../../context/modal/modalContext'
import { Modal, Button } from 'semantic-ui-react'
import LoginModal from './customModals/LoginModal'
import SubmitModal from './customModals/SubmitModal'


const ModalLayout = () => {

    const modalContext = useContext(ModalContext)
    const { modal, modalShow, removeModal } = modalContext
    const {modalSize, modalTitle, modalBody, hasCustomBody, customBodyName, hasCustomModalFooter, onModalSubmit, objectToPass} = modal

    return (
        <Modal size={modalSize} open={modalShow} onClose={removeModal}>
          <Modal.Header>{modalTitle}</Modal.Header>
          {hasCustomBody ? 
            (customBodyName === 'login' ? (<LoginModal  />) : 
            (customBodyName === 'submit' ? (<SubmitModal />) :
                (<p>This is a modal.</p>)
                )
            ) 
            :(<Modal.Content>
                {modalBody}
              </Modal.Content>   
            )}
          
            {!hasCustomModalFooter ? (
          <Modal.Actions>
            <Button
              negative
              content='Cancel'
              onClick={removeModal}
            />
          </Modal.Actions>
          ) : (onModalSubmit ? 
(          <Modal.Actions>
            <Button
              negative
              content='Cancel'
              onClick={removeModal}
            />
        <Button
            positive
            content='Submit'
            onClick={onModalSubmit}
        />
        </Modal.Actions>)
                  
            : (''))}
        </Modal>
    )
}

export default ModalLayout
