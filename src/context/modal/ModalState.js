import React, {useReducer} from 'react'
import ModalContext from './modalContext'
import modalReducer from './modalReducer'
import {
    SET_MODAL,
    REMOVE_MODAL
} from '../types'

const ModalState = props => {

    const initialState = {
        modalShow: false,
        modal:{
            modalSize: 'small',
            modalTitle: '',
            modalBody: '',
            hasCustomBody: false,
            customBodyName: '',
            hasCustomModalFooter: false,
            onModalSubmit: '',
            objectToPass: null
        }
    }
    const [state, dispatch] = useReducer(modalReducer, initialState);

    //Set Modal
    const setModal = (modal) => {        
        dispatch({
            type: SET_MODAL,
            payload: modal
        })
    }

    //Remove Modal
    const removeModal = () => {        
        dispatch({
            type: REMOVE_MODAL,
            payload: initialState.modal
        })
    }
    return (
        <ModalContext.Provider
        value={{
            modalShow: state.modalShow,
            modal: state.modal,
            setModal,
            removeModal
        }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalState
