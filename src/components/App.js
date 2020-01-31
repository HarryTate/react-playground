import React from 'react';
import '../App.css';
import Header from './Header';
import Body from './Body';
import Profile from './Profile'
import Footer from './Footer';

export default class App extends React.Component {
  state = {
    users: [ 
      {
        uid: 1,
        name: "Peter",
        age: 21,
        status: true
      },
      {
        uid: 2,
        name: "William",
        age: 31,
        status: false
      },
      {
        uid: 3,
        name: "Graham",
        age: 64,
        status: true
      },
      {
        uid: 4,
        name: "Liam",
        age: 22,
        status: false
      },
      {
        uid: 5,
        name: "Barry",
        age: 19,
        status: true
      }
    ],
    currentUser: {}
  }
  switchUser = (user, index) => {
    const users = { ...this.state.users }
    users[index].status = user.status === true ? false : true;
    this.setState({ users: this.state.users });
  }
  setUser = user => {
    this.setState({ currentUser: user });
  };
  removeUser = (user, index) => {
    const users = [ ...this.state.users ];
    this.setState({
      users: users.filter(user => user !== users[index]),
      currentUser: users.filter(user => user === null)
    })
  }

  render(){
    return ( 
        <React.Fragment>
          <Header text={"header"} />
          <div className="container">
            <div className="row">
              <div className="col">
                <Body 
                  switchUser={this.switchUser} 
                  user={this.state.users} 
                  setUser={this.setUser}
                  removeUser={this.removeUser}
                   />
              </div>
              <div className="col">
                <Profile currentUser={this.state.currentUser}/>
              </div>
            </div>
          </div>
          <Footer footer="footer"/>
        </React.Fragment>
      )
    }
  }
