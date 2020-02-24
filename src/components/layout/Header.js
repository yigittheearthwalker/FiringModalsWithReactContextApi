import React from 'react'
import { Grid, Header } from 'semantic-ui-react'


const InformativeHeader = () => {
    return (
        <Grid className="info-header" centered columns={1}>
            <Grid.Column textAlign='center'>
                <Header color="yellow" as='h3'>Firing Modals with React Context API</Header>
                <p> 
                    This example is to show how easy it is to fire modals through React Context API.
                </p>
                <p>
                    I used Semantic-React to give it a shape but you can apply the same logic with any framlework (Bootstrap etc.)
                </p>
                <p>
                    or even create your own modal component
                </p>   
            </Grid.Column>
        </Grid>
    )
}

export default InformativeHeader
