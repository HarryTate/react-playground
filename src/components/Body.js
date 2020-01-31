import React from 'react'

class Body extends React.Component {
  render(){
    return (
    <div className="card p-4">
      <h2>Users</h2>
      {this.props.user.map((user, index) => 
      <ul key={user.uid}>
        <li>User ID: {user.uid}</li>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
        <li>
          Status: <span className={user.status === true ? "text-success font-weight-bold" : "text-danger"}>
            {user.status === true ? "online" : "offline"}</span>
        </li>
        <button className="btn btn-primary m-1" onClick={() => this.props.switchUser(user, index)} >Switch</button>
        <button className="btn btn-secondary m-1" onClick={() => this.props.setUser(user)}>Display User</button>
        <button className="btn btn-danger m-1" onClick={() => this.props.removeUser(user, index)}>Remove User</button>
      </ul>
      )}
    </div>
 )}
}

Body.propTypes = {

}

export default Body

