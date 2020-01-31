import React from 'react';
import CurrentUser from './CurrentUser';

export default class Profile extends React.Component {
  render() {
    return (
      <CurrentUser user={this.props.currentUser} />
    );
  }
}
