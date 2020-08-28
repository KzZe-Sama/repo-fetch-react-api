
import React from 'react'
import { Header ,Container, Segment, Label, Button} from 'semantic-ui-react'
export default function Feed(props) {

    return <>
    <Container>
        <Header as="h1" color="orange">
            Fetch Git Hub API
        </Header>
        <Segment inverted>
            <Label image size="huge" color="orange" ribbon>
                Git Hub
            </Label>
            <form style={{marginTop:"20px",padding:"10px 10px"}} onSubmit={props.getUser}>
                <label style={{fontSize:"20px"}}>User Name</label>
                <input style={{marginLeft:"20px",height:"30px",borderRadius:"5px",border:"none",outline:"none"}} required placeholder="Enter a Username" name="username"/>
                <p><Button color="teal" >Search </Button></p>
            </form>
        </Segment>
        
    </Container>
    </>

}
