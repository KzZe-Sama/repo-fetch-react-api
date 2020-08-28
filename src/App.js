import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Feed from './components/Feed/Feed'
import Axios from 'axios';
import { Segment, Container, Header, Divider } from 'semantic-ui-react';

function App() {

  const [repos, getRepos] = useState(null);
  const [user,getUserData]=useState(null);

  useEffect(() => {
    console.log(user)
  })
  const getUser = (event) => {
    event.preventDefault();
    const user = event.target.elements.username.value
    Axios.get(`https://api.github.com/users/${user}/repos`)
      .then(datas => {
         let reposData = datas.data
        getRepos(reposData)

      })
      Axios.get(`https://api.github.com/users/${user}`)
      .then(datas=>{
         let userDatas=datas.data
        getUserData(userDatas)
        
      })


  }

  return (
    <>
      <Navbar userDetail={user}/>
      <main>
        <Feed getUser={getUser} />
        <Divider></Divider>
        {repos &&
          <Container content>
            <Segment inverted>
              <Header as="h2">All Your Repos</Header>
              <ul>
                {repos.map((repo) => <li>{repo.name}</li>)}
              </ul>
            </Segment>
          </Container>
        }
      </main>







    </>
  );
}

export default App;
