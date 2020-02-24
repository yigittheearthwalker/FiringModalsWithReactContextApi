import React, {useContext, useState} from 'react'
import { Grid, Button, Input, TextArea } from 'semantic-ui-react'
import ModalContext from '../../context/modal/modalContext'

const Home = () => {
    const modalContext = useContext(ModalContext)
    const { setModal, modal } = modalContext

    const [dynamicState, setDynamicState] = useState({
        modalTitle: '',
        modalBody: ''
    })
    const {modalTitle, modalBody} = dynamicState
    const onChange = e => {
        setDynamicState({...dynamicState, [e.target.name]: e.target.value})
    }


    const fireModal = (whichModal) => {
        switch (whichModal) {
            case 'static':
                modal['modalTitle'] = 'Static Modal!'
                modal['modalBody'] = "I'm sure you can see how static message this is..."
                break;
            case 'custom':
                modal['modalTitle'] = 'Select Your Login Method!'
                modal['hasCustomBody'] = true
                modal['customBodyName'] = 'login'
                break;
            case 'dynamic':
                modal['modalTitle'] = modalTitle
                modal['modalBody'] = modalBody
                setDynamicState({...dynamicState, modalTitle: '', modalBody: ''})
                break;
            case 'approval':
                modal['modalTitle'] = 'Do you aggree?'
                modal['modalBody'] = "Do you aggree to submit this modal?"
                modal['hasCustomModalFooter'] = true
                modal['onModalSubmit'] = () => { alert('Hurray!')}
            default:
                break;
        }
        setModal(modal)        
    }

    return (
        <div className="boxes">
            <Grid relaxed >
                <Grid.Column className="modal-box hardcoded" textAlign="center" verticalAlign="middle" mobile={16} tablet={8} computer={8}>
                    <p style={{fontFamily: "Pacifico"}}>You can</p>
                    <Button onClick={()=>{fireModal('static')}} className="fire-btn" color='blue'>Fire!</Button>
                    <p style={{fontFamily: "Orbitron"}}>a static,</p>
                    <p style={{fontFamily: "Orbitron"}}>hardcoded modal</p>  
                </Grid.Column>
                <Grid.Column className="modal-box custom" textAlign="center" verticalAlign="middle" mobile={16} tablet={8} computer={8}>
                    <p style={{fontFamily: "Kosugi"}}>Or create a custom one</p>
                    <p style={{fontFamily: "Kosugi"}}>And</p>
                    <Button onClick={()=>{fireModal('custom')}} className="fire-btn" color='yellow'>Fire!</Button>
                    <p style={{fontFamily: "Lacquer"}}>Like login buttons</p>
                </Grid.Column>
                <Grid.Column className="modal-box dynamic" textAlign="center" verticalAlign="middle" mobile={16} tablet={8} computer={8}>
                    <p style={{fontFamily: "Indie Flower"}}>Or a dynamic one</p>
                    <Input name="modalTitle" value={modalTitle} onChange={onChange} placeholder='Modal Header...' /><br/>
                    <TextArea name="modalBody" value={modalBody} onChange={onChange} placeholder='Modal Body' /> <br/>
                    <Button onClick={()=>{fireModal('dynamic')}} className="fire-btn" color='red'>Fire!</Button>
                </Grid.Column>
                <Grid.Column className="modal-box approval" textAlign="center" verticalAlign="middle" mobile={16} tablet={8} computer={8}>
                    <p style={{fontFamily: "Pacifico"}}>Or else</p>
                    <Button onClick={()=>{fireModal('approval')}} className="fire-btn" color='green'>Fire!</Button>
                    <p style={{fontFamily: "Luckiest Guy"}}>A modal with a</p>
                    <p style={{fontFamily: "Luckiest Guy"}}>custom function in it...</p>
                </Grid.Column>
        </Grid>
      </div>
    )
}

export default Home
