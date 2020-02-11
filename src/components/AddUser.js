import React, { Component } from 'react'

export default class addUser extends Component {

  nameRef = React.createRef();
  ageRef = React.createRef();
  

  createUser = e  => {
    e.preventDefault();
    const user = {
      uid: Date.now(),
      name: this.nameRef.current.value,
      age: this.ageRef.current.value,
      status: false
    }
    this.props.handleSubmit(user);
    e.currentTarget.reset();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createUser}>
          <div className="form-group">
            <label htmlFor="Name">Name:</label>
            <input type="text" ref={this.nameRef} name="name" className="formControl"/>
          </div>
          <div className="form-group">
            <label htmlFor="Age">Age:</label>
            <input type="text" ref={this.ageRef} name="age" className="formControl"/>
          </div>
          <button type="submit" className="btn btn-primary">Add User</button>
        </form>
      </div>
    )
  }
}
