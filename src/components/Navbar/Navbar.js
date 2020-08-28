import React from 'react'
import { Segment, Menu, Icon, Image, Header, Label } from 'semantic-ui-react'
import './style.css'
export default function Navbar(props) {

    return (
        <>
            <Segment inverted className="navbar-fb">
                <Menu inverted secondary>
                    <Menu.Item >
                        <Icon name="github" size="big" circular />

                    </Menu.Item>
                    <Header as="h3" color="blue">
                        {props.userDetail && props.userDetail.bio}
                    </Header>



                    <Menu.Menu position="right">
                        <Menu.Item>

                            {props.userDetail &&<a href={`https://github.com/${props.userDetail.login}`}>
                                    <Image src={props.userDetail.avatar_url} size="mini" circular />
                                </a>
                                
                                }
                            {props.userDetail && <a style={{marginLeft:"5px"}}href={`https://github.com/${props.userDetail.login}`}><Label color="orange"inverted >{props.userDetail.login}</Label></a>}



                        </Menu.Item>
                        <Menu.Item>

                            {props.userDetail && <Label color="blue">Followed By:{props.userDetail.followers} <b>people</b></Label>}
                        </Menu.Item>

                        {props.userDetail && <Menu.Item onClick={() => {
                            window.location.reload()
                        }}><Icon name="log out" size="large" color="teal" /></Menu.Item>}




                    </Menu.Menu>

                </Menu>
            </Segment>
        </>
    )
}
