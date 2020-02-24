import React, {useContext} from 'react'
import { Modal, List, Button, Icon, Grid } from 'semantic-ui-react'
import ModalContext from '../../../context/modal/modalContext'

const LoginModal = () => {

    const modalContext = useContext(ModalContext)


    const googleLogin = () => {
        const provider = 'google'
        //authStart(provider)
        modalContext.removeModal()
    }
    const facebookLogin = () => {
        const provider = 'facebook'
        //authStart(provider)
        modalContext.removeModal()
    }
    const emailLogin = () => {
        const provider = 'email'
        //authStart(provider)
        modalContext.removeModal()
    }

    return (
        <Modal.Content>
            <p>You can authorize yourself using one of the options below</p>
            <Grid >
                <Grid.Row centered columns={1}>
                <Grid.Column textAlign="center" width={10}>
                    <List className="login-buttons">
                        <List.Item className="login-item">
                        <Button onClick={googleLogin} fluid color='google plus'>
                            <Icon name='google plus' /> Login with Google
                        </Button>
                        </List.Item>
                        <List.Item className="login-item">
                        <Button onClick={facebookLogin} fluid color='facebook'>
                            <Icon name='facebook' /> Login with Facebook
                        </Button>
                        </List.Item>
                        <List.Item className="login-item">
                        <Button onClick={emailLogin} fluid >
                            <Icon name='mail' /> Email &#38; Password
                        </Button>
                        </List.Item>
                    </List>
                </Grid.Column>
                </Grid.Row>
            </Grid>         
        </Modal.Content>
    )
}

export default LoginModal
