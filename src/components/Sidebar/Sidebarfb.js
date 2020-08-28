import React from 'react'
import { Icon, Segment ,List, Divider, Header} from 'semantic-ui-react'
import './style.css'


export default function Sidebarfb() {
  return (

    <Segment className="sidebar-div" inverted>
      <ul>
      <li><Icon Icon name='github' size='big'/>Aayush
      <List.Description></List.Description></li>
      <li><Icon Icon name='github' size='big'/>Aayush</li>
      <li><Icon Icon name='github' size='big'/>Aayush</li>
      <li><Icon Icon name='github' size='big'/>Aayush</li>
      <li><Icon Icon name='github' size='big'/>Aayush</li>
      <li><Icon Icon name='github' size='big'/>Aayush</li>
      <li><Icon Icon name='github' size='big'/>Aayush</li>
      <li><Icon Icon name='github' size='big'/>Aayush</li>
      <Divider></Divider>
      <Header as="h3" className="white-text">Your Shortcuts</Header>
      <li><Icon Icon name='github' size='big'/>Shortcuts</li>
      <li><Icon Icon name='github' size='big'/>Shortcuts</li>
      <li><Icon Icon name='github' size='big'/>Shortcuts</li>
      </ul>
      
    </Segment>



  )
}
