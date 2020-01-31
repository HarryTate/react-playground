import React from 'react';

const CurrentUser = (props) => {
  const {uid, name, age, status} = props.user;
  if (Object.keys(props.user).length > 0){
    return (
      <React.Fragment>
        <h2>Current User</h2>
        <ul>
        <li>ID: {uid}</li>    
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Status: {status === true ? "Active" : "Not active"}</li>
        </ul>
      </React.Fragment>
    );
  } 
  return <p>Select a user to display</p>;
  
}

  export default CurrentUser;


