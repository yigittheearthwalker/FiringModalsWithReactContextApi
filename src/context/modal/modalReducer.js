import {SET_MODAL, REMOVE_MODAL} from '../types'

export default (state, action) => {
    switch (action.type){
        case SET_MODAL:
            return{
                ...state,
                modalShow: true,
                modal: action.payload
            }
        case REMOVE_MODAL:
            return{
                ...state,
                modalShow: false,
                modal: action.payload
            }    
        default:
            return {state, modalShow: false}
    }
}