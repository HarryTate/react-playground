import React from 'react';
import '../App.css';
import Header from './Header';
import Body from './Body';
import Profile from './Profile';
import AddUser from './AddUser';
import Footer from './Footer';

export default class App extends React.Component {
  state = {
    users: [ 
      {
        uid: 1581458285098,
        name: "Peter Smith",
        age: 21,
        status: true
      },
      {
        uid: 1581458300064,
        name: "William Phillips",
        age: 31,
        status: false
      },
      {
        uid: 1581458311302,
        name: "Graham Nigels",
        age: 64,
        status: true
      },
      {
        uid: 1581458319528,
        name: "Liam Jones",
        age: 22,
        status: false
      },
      {
        uid: 1581458327686,
        name: "Barry Coull",
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
  handleSubmit = user => {
    const newUser = { ...this.state.users };
    newUser[Date.now()] = user;
    this.setState(prevState => ({
       users: [...prevState.users, user] 
      }));

    console.log(this.state.users);
  }
  removeUser = (user, index) => {
    const users = [ ...this.state.users ];
    const currentUser = { ...this.state.currentUser };
    
    this.setState({
      users: users.filter(user => user !== users[index]),
      currentUser: currentUser
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
              <div className="col">
                <AddUser handleSubmit={this.handleSubmit}/>
              </div>
            </div>
          </div>
          <Footer footer="footer"/>
        </React.Fragment>
      )
    }
  }
